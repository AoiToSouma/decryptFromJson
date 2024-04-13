const XDC3 = require('xdc3');
const readlineSync = require('readline-sync');
const fs = require('fs');

//Letter Color
const RED     = '\u001b[31m';
const YELLOW  = '\u001b[33m';
const RESET   = '\u001b[0m';

//RPC
const RPC = 'https://rpc.ankr.com/xdc';

async function main() {
    console.log(YELLOW);
    console.log('=================================================================================');
    console.log('If PrivateKey is leaked, your assets will be taken away.');
    console.log('Please be careful not to let others see you.');
    console.log('PrivateKeyは流出すると資産を奪われます。他人に見られないように注意してください。');
    console.log('=================================================================================');
    console.log(RESET);

    const jsonfile = readlineSync.question('Enter full path of wallet json file: ');
    if (!jsonfile) {
        console.log('Invalid input.');
        return;
    }
    const jsonpath = jsonfile.replace('~', process.env.HOME);
    if (!fs.existsSync(jsonpath)) {
        console.log('Error: JSON File not found');
        return;
    }
    try {
        const jsontext = fs.readFileSync(jsonpath, 'UTF8');
        const keystore = readlineSync.question('Enter Keystore: ', { hideEchoBack: true });

        const xdc3 = new XDC3(new XDC3.providers.HttpProvider(RPC));
        const account = await xdc3.eth.accounts.decrypt(jsontext, keystore);
        console.log(RED);
        console.log('=================================================================================');
        console.log('The address and privateKey will be displayed. Make sure there are no people around.');
        console.log('After checking, immediately clear the screen using the "clear" command.');
        console.log('addressとprivateKeyが表示されます。周りに人がいないことを確認してください。');
        console.log('確認後はすぐに"clear"コマンドにて画面をクリアしてください。');
        console.log('=================================================================================');
        console.log(RESET);
        const reply = readlineSync.question('Press any key to display: ');
        console.log('address   : '+account.address);
        console.log('privateKey: '+account.privateKey);

    } catch(e) {
        console.log("["+e.name+"]"+e.message);
    }
}

main();
