import { PropsWithChildren } from 'react';
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from 'wagmi/chains';

const WagmiClient = ({ children }: PropsWithChildren) => {
  const { provider, webSocketProvider } = configureChains([mainnet], [publicProvider()]);

  const wagmiClient = createClient({
    provider,
    webSocketProvider,
    autoConnect: true
  });

  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
};

export default WagmiClient;
