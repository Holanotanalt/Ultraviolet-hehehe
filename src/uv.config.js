/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://noob-server-node-dev-zgpj.1.us-1.fl0.io/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv.handler.js',
    client: '/uv.client.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
