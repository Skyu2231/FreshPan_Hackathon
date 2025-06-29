import { createWalletClient, createPublicClient, custom, http, parseEther } from 'https://esm.sh/viem'
import { sepolia } from 'https://esm.sh/viem/chains'

const connectBtn = document.getElementById('connect-btn')
const buyBtn = document.getElementById('buy-btn')
const walletSpan = document.getElementById('wallet-address')
const priceText = document.getElementById('food-price')

// ETH/USD Line Element
const ethLine = document.createElement('p')
ethLine.id = 'eth-price'
ethLine.textContent = 'Price in ETH: calculating...'
priceText.insertAdjacentElement('afterend', ethLine)

let walletClient = null
let publicClient = null
let currentAccount = null
let ethUsdPrice = null

// Chainlink ETH/USD Price Feed (Sepolia)
const priceFeedAddress = '0x694AA1769357215DE4FAC081bf1f309aDC325306'
const priceFeedABI = [{
  name: 'latestRoundData',
  type: 'function',
  stateMutability: 'view',
  inputs: [],
  outputs: [
    { name: 'roundId', type: 'uint80' },
    { name: 'answer', type: 'int256' },
    { name: 'startedAt', type: 'uint256' },
    { name: 'updatedAt', type: 'uint256' },
    { name: 'answeredInRound', type: 'uint80' }
  ]
}]

// Get price in USD from text "Price: $9.99"
function getPriceInUSD() {
  const match = priceText.textContent.match(/\$([\d.]+)/)
  return match ? parseFloat(match[1]) : 0
}

// Connect to MetaMask + Fetch ETH/USD from Chainlink
connectBtn.addEventListener('click', async () => {
  if (!window.ethereum) {
    alert('MetaMask is not installed')
    return
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    currentAccount = accounts[0]

    // Viem wallet + public client
    walletClient = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum)
    })

    publicClient = createPublicClient({
      chain: sepolia,
      transport: http()
    })

    // Display wallet address
    walletSpan.textContent = `${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`
    connectBtn.textContent = 'Connected'
    connectBtn.disabled = true
    buyBtn.disabled = false

    // Get live ETH/USD price from Chainlink
    const result = await publicClient.readContract({
      address: priceFeedAddress,
      abi: priceFeedABI,
      functionName: 'latestRoundData'
    })

    ethUsdPrice = Number(result[1]) / 1e8
    const usd = getPriceInUSD()
    const ethAmount = usd / ethUsdPrice
    ethLine.textContent = `Price in ETH: ${ethAmount.toFixed(6)} ETH`

  } catch (err) {
    if (err.code === 4001) {
      alert('MetaMask is not connected.')
    } else {
      console.error('Error:', err)
      alert('Failed to connect or fetch ETH price.')
    }
  }
})

// Buy button → send ETH
buyBtn.addEventListener('click', async () => {
  if (!walletClient || !currentAccount || !ethUsdPrice) {
    alert('Please connect your wallet first.')
    return
  }

  const usd = getPriceInUSD()
  const ethAmount = usd / ethUsdPrice

  try {
    const txHash = await walletClient.sendTransaction({
      account: currentAccount,
      to: '0x6bB5675868436Ab3A9B4F43c7a30Edee30AA7f88', // your test wallet
      value: parseEther(ethAmount.toFixed(6))
    })

    alert('Transaction sent!\nTx Hash: ' + txHash)
  } catch (err) {
    console.error('Transaction error:', err)
    alert('Transaction failed: ' + (err.shortMessage || err.message))
  }
})
