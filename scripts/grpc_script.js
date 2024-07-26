import grpc from 'k6/x/grpc';
import { check } from 'k6';

const client = new grpc.Client();
client.load(['./path/to/your/proto'], 'your.proto.package');

export default () => {
    client.connect('localhost:50051', {
        plaintext: true,
    });

    const response = client.invoke('your.package.Service/Method', {
        key: 'value',
    });

    check(response, {
        'status is OK': (r) => r && r.status === grpc.StatusOK,
    });

    client.close();
};
