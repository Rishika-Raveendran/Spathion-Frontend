import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

import L_Header from "./components/Lender/L_Header";
import L_Info from "./components/Lender/L_Info";
import L_profile from "./components/Lender/L_Profile";
import Lend from "./components/Lender/Lend";

import B_Header from "./components/Borrower/B_Header";
import B_Info from "./components/Borrower/B_Info";
import B_Profile from "./components/Borrower/B_Profile";
import B_Invoicedetailstmp from "./components/Borrower/B_Invoicedetailstmp";
import B_Mint from "./components/Borrower/B_Mint";
import B_Invoices from "./components/Borrower/B_Invoices";

import V_Header from "./components/Validator/V_Header";
import V_Lprofiles from "./components/Validator/V_Lprofiles";
import V_Bprofiles from "./components/Validator/V_Bprofiles";
import V_Invoicedetails from "./components/Validator/V_Invoicedetails";
import V_Uploadedinvoices from "./components/Validator/V_Uploadedinvoices";
import V_Uploadedarpas from "./components/Validator/V_Uploadedarpas";
import V_Whitelist from "./components/Validator/V_Whitelist";
import V_Transfer from "./components/Validator/V_Transfer";
import V_Approvedinvoices from "./components/Validator/V_Approvedinvoices";

import LandingPage from "./Screens/LandingPage/LandingPage";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider ,midnightTheme} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet,goerli, polygon, optimism } from 'wagmi/chains'

import { publicProvider } from "wagmi/providers/public";
import Login from "./Screens/Login";

const { chains, provider } = configureChains(
  [mainnet, polygon, goerli, optimism],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Spathion",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()} coolMode >
        <BrowserRouter>
          <Switch>
            <main>
              <Route exact path="/">
                <LandingPage />
                {/* <Login/> */}
                <Footer />
              </Route>
              <Route exact path="/Borrower/info">
                <B_Header />
                <B_Info />
              </Route>
              <Route exact path="/Borrower/profile">
                <B_Header />
                <B_Profile />
              </Route>
              <Route exact path="/Borrower/invoicedetails">
                <B_Header />
                <B_Invoicedetailstmp />
              </Route>
              <Route exact path="/Borrower/mint">
                <B_Header />
                <B_Mint />
              </Route>
              <Route exact path="/Borrower/invoices">
                <B_Header />
                <B_Invoices />
              </Route>
              <Route exact path="/Lender/info">
                <L_Header />
                <L_Info />
              </Route>
              <Route exact path="/Lender/profile">
                <L_Header />
                <L_profile />
              </Route>
              <Route exact path="/Lender/lend">
                <L_Header />
                <Lend />
              </Route>
              <Route exact path="/Validator/Lprofiles">
                <V_Header />
                <V_Lprofiles />
              </Route>

              <Route exact path="/Validator/Bprofiles">
                <V_Header />
                <V_Bprofiles />
              </Route>

              <Route exact path="/Validator/invoicedetails">
                <V_Header />
                <V_Invoicedetails />
              </Route>

              <Route exact path="/Validator/uploadedinvoices">
                <V_Header />
                <V_Uploadedinvoices />
              </Route>
              <Route exact path="/Validator/uploadedarpas">
                <V_Header />
                <V_Uploadedarpas />
              </Route>

              <Route exact path="/Validator/whitelist">
                <V_Header />
                <V_Whitelist />
              </Route>

              <Route exact path="/Validator/transfer">
                <V_Header />
                <V_Transfer />
              </Route>

              <Route exact path="/Validator/approved">
                <V_Header />
                <V_Approvedinvoices />
              </Route>
            </main>
          </Switch>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
