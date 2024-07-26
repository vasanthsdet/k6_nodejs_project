const { exec } = require('child_process');

const runK6Test = (scriptPath) => {
  return new Promise((resolve, reject) => {
    exec(`k6 run ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running k6 script ${scriptPath}: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`Error output of k6 script ${scriptPath}: ${stderr}`);
      }
      console.log(`Output of k6 script ${scriptPath}: ${stdout}`);
      resolve(stdout);
    });
  });
};

const runTests = async () => {
  try {
    // Run GET script
    await runK6Test('test-script.js');
    
    // Run POST script
    await runK6Test('test_post_script.js');
    
  } catch (error) {
    console.error('One or more k6 scripts failed');
    process.exit(1);
  }
};

runTests();