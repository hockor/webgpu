async function main(){
    const adapter = await navigator.gpu.requestAdapter();

    const device = await adapter.requestDevice();

    console.log("**********************");
    console.log("适配器对象：", adapter);
    console.log("设备对象：", device);

}

main() 