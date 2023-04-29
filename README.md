# nft-analytics
Frontend repository for my final year project

# Instructions on how to run this project locally

## 1. Installing the dependencies

Yarn package manager was used to install the packages, all information on how to get Yarn can be found on https://yarnpkg.com/getting-started/install

To install all packages run the command below

<code>yarn install</code>

## 2. Setting the environment variables

For this project to run, it has to communicate with the server. By default, the address should start as http://127.0.0.1 however the port should match whatever port the server is running on.

<code>.env.example</code> file is provided to see the syntax that the <code>.env</code> file should follow

## 3. Run the project

Use the command below to run the project. The client should then be available at http://127.0.0.1:3000

<code>yarn dev</code>

## 4. Obtain a MetaMask wallet

As this project uses crypto wallet authentication, its user needs to have one. A MetaMask chrome extension can be obtained at https://metamask.io/ and the instructions on how to create a wallet are presented in the extension.

## 5. Obtain NFTs (optional)

To test the Profile View, one should have NFTs. To obtain an NFT, one can follow one of three ways.

1. Buy an NFT from OpenSea
2. Create an NFT using OpenSea
3. Ask the student for them to transfer you NFTs. Include your wallet address in the email. Send it to sc19jt@leeds.ac.uk
