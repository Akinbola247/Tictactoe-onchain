# Tic Tac Toe On Chain

"Tic Tac Toe On Chain" introduces a groundbreaking fusion of the classic game of Tic Tac Toe with the capabilities of blockchain technology. Developed on the StarkNet powered by the Dojo engine, this project offers an immersive multiplayer gaming experience coupled with real-time token rewards and seamless integration with the Argent Wallet & burner wallets.

## Game Features

- **Multiplayer Tic Tac Toe:** Engage in matches of Tic Tac Toe with friends and opponents from around the world. The game's multiplayer functionality allows for seamless and competitive gameplay experiences.
- **Token Rewards on Victory:** With every victory in Tic Tac Toe On Chain, players are rewarded with native ERC20 tokens. Tokens are minted and distributed to the victorious player's burner wallets in real-time, adding a dynamic layer of gamified incentives to the gameplay.
- **Seamless Wallet Integration:** Earned ERC20 tokens can be seamlessly sent to Argent Wallets, providing players convenient access to their crypto rewards.

## Technologies Utilized

### Dojo Engine

The Dojo Engine serves as the backbone of our gaming environment, managing game logic and setup seamlessly. Its robust capabilities enable smooth gameplay experiences and efficient handling of various gaming scenarios.

### Argent

Argent plays a pivotal role in our application by facilitating wallet connectivity and securely managing the receipt of ERC20 tokens. With Argent integration, users can confidently engage in transactions and manage their digital assets with ease.

### Braavos

Braavos enhances user connectivity and interaction within the TicTacToe ecosystem. It provides a seamless interface for users to engage with the game, fostering an immersive and enjoyable gaming experience.

### Pragma

Pragma's Verifiable Random Number (VRF) feature is leveraged to uniquely generate player IDs within the TicTacToe platform. By utilizing Pragma, we ensure the integrity and randomness of player identification, enhancing the fairness and security of the gaming environment.

## What Makes Us Unique

- **Cutting-Edge Technology:** Tic Tac Toe On Chain leverages StarkNet's advanced scalability and security features, combined with the powerful Dojo engine, to deliver a seamless and secure gaming experience on the blockchain.
- **Incentivized Gameplay:** The integration of token rewards incentivizes active participation and fosters a vibrant gaming community. Players not only enjoy the thrill of competitive gameplay but also have the opportunity to earn tangible rewards for their skill and strategy.
- **User-Friendly Integration:** With support for Argent Wallet integration, players can effortlessly manage and utilize their earned ERC20 tokens, enhancing the overall accessibility and usability of the game's token economy.

## How to Run the Game:

### Requirements

- Sozo CLI
- Dojo v0.5.1
- Torii
- Katana

### Process

1. Run `katana --disable-fee` on a separate terminal.
2. Navigate to the `contract` directory and run `sozo migrate` on another terminal.
3. Run `torii --world <world address>` on a separate terminal.
4. Navigate to the `client` directory, install dependencies with `npm i`, and start the development server with `npm run dev`.
5. Run the script `sh contracts/scripts/default_auth.sh` on a separate terminal.

## To Do

- Bug fixes

Tic Tac Toe On Chain represents the pinnacle of innovation in blockchain-based gaming, offering an immersive multiplayer experience coupled with real-time token rewards and seamless integration. Whether you're a casual player looking for friendly competition or a seasoned gamer aiming to earn crypto rewards, Tic Tac Toe On Chain promises an unparalleled gaming experience on the blockchain. Challenge your friends, and start earning tokens today!
