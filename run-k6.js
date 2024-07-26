const { exec } = require('child_process');

exec('k6 run scripts/test-script.js', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing k6 script: ${err}`);
        return;
    }
    console.log(`k6 stdout: ${stdout}`);
    console.error(`k6 stderr: ${stderr}`);
});

exec('k6 run scripts/test_post_script.js', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing k6 script: ${err}`);
        return;
    }
    console.log(`k6 stdout: ${stdout}`);
    console.error(`k6 stderr: ${stderr}`);
});

