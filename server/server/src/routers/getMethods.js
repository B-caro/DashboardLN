const {Router} = require('express');
const router = Router();

const {lnd} = authenticatedLndGrpc({
    cert: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNOU5pSE5TZzZZYnk3elVKK3ladnV6UW93Q2dZSUtvWkl6ajBFQXdJd09ERWYKTUIwR0ExVUVDaE1XYkc1a0lHRjFkRzluWlc1bGNtRjBaV1FnWTJWeWRERVZNQk1HQTFVRUF4TU1NRFUxTkRCaQpPRE5oWTJFd01CNFhEVEl6TURjeE1USXlNak16TWxvWERUSTBNRGt3TkRJeU1qTXpNbG93T0RFZk1CMEdBMVVFCkNoTVdiRzVrSUdGMWRHOW5aVzVsY21GMFpXUWdZMlZ5ZERFVk1CTUdBMVVFQXhNTU1EVTFOREJpT0ROaFkyRXcKTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFblZxUVJsNm1IeTBBOWV6dXFiVGdTRkIvNG9mawpmdVdpbm5QTlZoTXhobWU3eUc4L1NsYlZVeThFdUlQUjRJek4vQWtxOXpZNE4vdmRaa0c3SG9Gc25hT0J4akNCCnd6QU9CZ05WSFE4QkFmOEVCQU1DQXFRd0V3WURWUjBsQkF3d0NnWUlLd1lCQlFVSEF3RXdEd1lEVlIwVEFRSC8KQkFVd0F3RUIvekFkQmdOVkhRNEVGZ1FVRlFQMDhDQ094K2FDaXFYTHBuRU43MnVubmRrd2JBWURWUjBSQkdVdwpZNElNTURVMU5EQmlPRE5oWTJFd2dnbHNiMk5oYkdodmMzU0NDV3h2WTJGc2FHOXpkSUlFZFc1cGVJSUtkVzVwCmVIQmhZMnRsZElJSFluVm1ZMjl1Ym9jRWZ3QUFBWWNRQUFBQUFBQUFBQUFBQUFBQUFBQUFBWWNFckJrQUJJY0UKQUFBQUFEQUtCZ2dxaGtqT1BRUURBZ05KQURCR0FpRUF1OTR3OGtJcXhYWStzeXZWTHh2MlFkRWJMbGFCSmM0MgpjcHNwWTY5bERIQUNJUUNvMmwxaFVCa05RQno1eXZaYWVISVU5UTlCb0dGdFA4d0ZGNlk3Rm9aR2VnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=',
    macaroon: 'AgEDbG5kAvgBAwoQVetJV1fg7JCm52vJisI6PxIBMBoWCgdhZGcml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaIQoIbWFjYXJvb24SCGdlbmVyYXRlEgRyZWFkEgV3cml0ZRoWCgdtZXNzYWdlEgRyZWFkEgV3cml0ZRoXCghvZmZjaGFpbhIEcmVhZBIFd3JpdGUaFgoHb25jaGFpbhIEcmVhZBIFd3JpdGUaFAoFcGVlcnMSBHJlYWQSBXdyaXRlGhgKBnNpZ25lchIIZ2VuZXJhdGUSBHJlYWQAAAYgrH8X3yT2r4HOu90MnAB3R296Cs2VSjXsk+BY8K90WJI=',
    socket: 'localhost:10009',
});

// methods
const {
    authenticatedLndGrpc,
    getWalletInfo,
    getChannels,
    getNode,
    getNetworkInfo,
    updateRoutingFees

} = require('lightning');


// get all allowed methods
router.get('/',async function(req,res){
    const methods=[
        'getInfo',
        'getNodoInfo ?public_key',
        'getChannels',
        'updatechanpolicy',
        'getNetworkInfo',
        'getWalletInfo'

    ]
    res.send(methods)
});
// get fees
router.get('/getFeeRates',async function(req,res){
    
    try {
        const result = await getNetworkInfo({lnd});
        res.send(result);
    
    } catch (error) {
        console.log(error);    
    }
    
});
// get wallet info
router.get('/getWalletInfo',async function(req,res){
    
    try {
        const result = await getWalletInfo({lnd});
        res.send(result);
    
    } catch (error) {
        console.log(error);
    }
});
// get info of nodos
router.get('/getInfo',async function(req,res){
    
    try {
        const result = await getWalletInfo({lnd});
        let data={
            alias:result.alias,
            chains:result.chains,
            identity_pubkey:result.public_key,
            version:result.version,
       
        }
        res.send(result);
    
    } catch (error) {
        console.log(error);    
    }
    
});
// get info of one node
router.get('/getNodoInfo/:public_key',async function(req,res){
    const publicKey = req.params.public_key;
    
    try {
        const result = await getNode({lnd, public_key: publicKey});
        const data={
            num_channels:result.channel_count,
            total_capacity:result.capacity,
            channels:result.channels
        }
        
        res.send(result);
    
    } catch (error) {
        console.log(error);   
    }
});
// list of all channels
router.get('/getChannels',async function(req,res){
    
    try {
        const result = await getChannels({lnd});
        res.send(result);
    
    } catch (error) {
        console.log(error);
    }
    
});
// update the policy
router.post('/updatechanpolicy',async function(req,res){
    const {fee_rate, base_fee_msat, min_htlc_msat, max_htlc_msat, time_lock_delta, chan_point} = req.body

    let params= {
        fee_rate: fee_rate, //0.000001 (millionths)
        base_fee_mtokens:base_fee_msat, // the base fee in milli-satoshis that will be charged for each forwarded HTLC, regardless of payment size (default: 0) 
        min_htlc_mtokens:min_htlc_msat, // if set, the min HTLC size that will be applied to all forwarded HTLCs. If unset, the min HTLC is left unchanged. (default: 0)
        max_htlc_mtokens:max_htlc_msat  // if set, the max HTLC size that will be applied to all forwarded HTLCs. If unset, the max HTLC is left unchanged. (default: 0)            
    }
    try {
        const channelPolicy = await getChannel({lnd,id: channelId });
        console.log(channelPolicy);

        let result = await updateRoutingFees({lnd, public_key:channelId});

        res.send(result);
    
    } catch (error) {
        console.log(error);   
    }

});

module.exports=router;