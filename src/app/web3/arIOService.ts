import { Injectable } from '@angular/core';
import { IO, ANT, ArconnectSigner, IOToken, mIOToken } from '@ar.io/sdk';
import Arweave from 'arweave';

@Injectable({
  providedIn: 'root'
})
export class ArIOService {
  private io: IO | null = null;
  private ant: ANT | null = null;
  private arweave: Arweave;

  constructor() {
    this.arweave = Arweave.init({});
  }

  async connect(): Promise<void> {
    if (typeof window.arweaveWallet === 'undefined') {
      throw new Error('ArConnect not found');
    }

    await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
    const address = await window.arweaveWallet.getActiveAddress();

    const signer = new ArconnectSigner(window.arweaveWallet, this.arweave);
    this.io = IO.init({ signer });
    
    // You can initialize ANT here if needed
    // this.ant = ANT.init({ signer, processId: 'YOUR_ANT_PROCESS_ID' });

    console.log('Connected to ArIO with address:', address);
  }

  async disconnect(): Promise<void> {
    if (typeof window.arweaveWallet !== 'undefined') {
      await window.arweaveWallet.disconnect();
    }
    this.io = null;
    this.ant = null;
  }

  async getGateways(): Promise<any> {
    if (!this.io) throw new Error('Not connected to ArIO');
    return this.io.getGateways();
  }

  async getBalance(address: string): Promise<number> {
    if (!this.io) throw new Error('Not connected to ArIO');
    const balance = await this.io.getBalance({ address });
    return new mIOToken(balance).toIO().valueOf();
  }

  async joinNetwork(params: {
    qty: number;
    autoStake: boolean;
    allowDelegatedStaking: boolean;
    minDelegatedStake: number;
    delegateRewardShareRatio: number;
    label: string;
    note: string;
    properties: string;
    observerWallet: string;
    fqdn: string;
    port: number;
    protocol: string;
  }): Promise<string> {
    if (!this.io) throw new Error('Not connected to ArIO');
    const { id: txId } = await this.io.joinNetwork({
      ...params,
      qty: new IOToken(params.qty).toMIO(),
      minDelegatedStake: new IOToken(params.minDelegatedStake).toMIO(),
    });
    return txId;
  }

  async transfer(params: {
    target: string;
    qty: number;
    denomination: 'IO' | 'mIO';
  }): Promise<string> {
    if (!this.io) throw new Error('Not connected to ArIO');
    const { id: txId } = await this.io.transfer({
      ...params,
      qty: params.denomination === 'IO' ? new IOToken(params.qty).toMIO() : params.qty,
    });
    return txId;
  }

  // Add more methods as needed for other ArIO operations

  // ANT methods (if needed)
  async getANTInfo(): Promise<any> {
    if (!this.ant) throw new Error('ANT not initialized');
    return this.ant.getInfo();
  }

  async setANTRecord(params: {
    undername: string;
    transactionId: string;
    ttlSeconds: number;
  }): Promise<string> {
    if (!this.ant) throw new Error('ANT not initialized');
    const { id: txId } = await this.ant.setRecord(params);
    return txId;
  }

  // Add more ANT methods as needed
}