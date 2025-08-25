import { EthereumProject, EthereumDatasourceKind, EthereumHandlerKind } from "@subql/types-ethereum";

import * as dotenv from "dotenv";
import path from "path";

const mode = process.env.NODE_ENV || "production";

// Load the appropriate .env file
const dotenvPath = path.resolve(__dirname, `.env${mode !== "production" ? `.${mode}` : ""}`);
dotenv.config({ path: dotenvPath });

const { SE_VAULT_ADDRESS, SE_REDEEM_ADDRESS, START_BLOCK } = process.env;

const startBlock = START_BLOCK ? parseInt(START_BLOCK) : 33837270;

// erc4626 event
// event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares);
// event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)

const SeETHV2Event = {
  Deposit: "Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares)",
  Withdraw: "Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)",
};

// event RedeemRequested(uint256 indexed requestId, address indexed owner, uint256 shares);
// event RedeemCancelled(uint256 indexed requestId, address indexed owner, uint256 shares);
// event RedeemApproved(uint256 indexed requestId, address indexed owner, uint256 shares);
// event RedeemExecuted(uint256 indexed requestId, address indexed owner, uint256 shares, uint256 assetsPaid);

const SeETHRedeemEvent = {
  RedeemRequested: "RedeemRequested(uint256 indexed requestId, address indexed owner, uint256 shares)",
  RedeemCancelled: "RedeemCancelled(uint256 indexed requestId, address indexed owner, uint256 shares)",
  RedeemApproved: "RedeemApproved(uint256 indexed requestId, address indexed owner, uint256 shares)",
  RedeemExecuted: "RedeemExecuted(uint256 indexed requestId, address indexed owner, uint256 shares, uint256 assetsPaid)",
};

// Can expand the Datasource processor types via the generic param
const project: EthereumProject = {
  specVersion: "1.0.0",
  version: "0.0.1",
  name: "seETH",
  description: "This project can be use as a starting point for developing your new Ethereum SubQuery project",
  runner: {
    node: {
      name: "@subql/node-ethereum",
      version: ">=3.0.0",
    },
    query: {
      name: "@subql/query",
      version: "*",
    },
  },
  schema: {
    file: "./schema.graphql",
  },
  network: {
    /**
     * chainId is the EVM Chain ID, for Ethereum this is 1
     * https://chainlist.org/chain/1
     */
    chainId: process.env.CHAIN_ID!,
    /**
     * These endpoint(s) should be public non-pruned archive node
     * We recommend providing more than one endpoint for improved reliability, performance, and uptime
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * If you use a rate limited endpoint, adjust the --batch-size and --workers parameters
     * These settings can be found in your docker-compose.yaml, they will slow indexing but prevent your project being rate limited
     */
    endpoint: process.env.ENDPOINT!?.split(",") as string[] | string,
  },
  dataSources: [
    {
      kind: EthereumDatasourceKind.Runtime,
      startBlock: startBlock,
      options: {
        abi: "seethv2",
        address: SE_VAULT_ADDRESS,
      },
      assets: new Map([["seethv2", { file: "./abis/SeETHV2.json" }]]),
      mapping: {
        file: "./dist/index.js",
        handlers: [
          // ERC4626 Events
          {
            kind: EthereumHandlerKind.Event,
            handler: "handleDeposit",
            filter: {
              topics: [SeETHV2Event.Deposit],
            },
          },
          {
            kind: EthereumHandlerKind.Event,
            handler: "handleWithdraw",
            filter: {
              topics: [SeETHV2Event.Withdraw],
            },
          },
        ],
      },
    },
    {
      kind: EthereumDatasourceKind.Runtime,
      startBlock: startBlock,
      options: {
        abi: "seethredeem",
        address: SE_REDEEM_ADDRESS,
      },
      assets: new Map([["seethredeem", { file: "./abis/SeETHRedeem.json" }]]),
      mapping: {
        file: "./dist/index.js",
        handlers: [
          // SeETH Redeem Events
          {
            kind: EthereumHandlerKind.Event,
            handler: "handleRedeemRequested",
            filter: {
              topics: [SeETHRedeemEvent.RedeemRequested],
            },
          },
          {
            kind: EthereumHandlerKind.Event,
            handler: "handleRedeemCancelled",
            filter: {
              topics: [SeETHRedeemEvent.RedeemCancelled],
            },
          },
          {
            kind: EthereumHandlerKind.Event,
            handler: "handleRedeemApproved",
            filter: {
              topics: [SeETHRedeemEvent.RedeemApproved],
            },
          },
          {
            kind: EthereumHandlerKind.Event,
            handler: "handleRedeemExecuted",
            filter: {
              topics: [SeETHRedeemEvent.RedeemExecuted],
            },
          },
        ],
      },
    },
  ],
  repository: "https://github.com/subquery/ethereum-subql-starter",
};

// Must set default to the project instance
export default project;
