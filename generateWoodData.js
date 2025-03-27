const fs = require('fs');
const path = require('path');

// Define the directory where your wood folders are located
const woodsDir = path.join(__dirname, 'public', 'woods');

// Function to read the text files and images for each wood type
const generateWoodData = () => {
  const woodsData = [];

  // Read all the region folders inside 'woods' directory
  const regionFolders = fs.readdirSync(woodsDir);

  // Loop through each region folder
  regionFolders.forEach((regionFolder) => {
    const regionPath = path.join(woodsDir, regionFolder);

    // Skip if not a directory
    if (!fs.statSync(regionPath).isDirectory()) return;

    // Read all the wood folders inside the region folder
    const woodFolders = fs.readdirSync(regionPath);

    woodFolders.forEach((woodFolder) => {
      const woodPath = path.join(regionPath, woodFolder);

      // Skip if not a directory
      if (!fs.statSync(woodPath).isDirectory()) return;

      const engFilePath = path.join(woodPath, 'eng.txt');
      const espFilePath = path.join(woodPath, 'esp.txt');
      const imagesDirPath = path.join(woodPath, 'img');

      // Read the description files (eng.txt and esp.txt)
      let engDescription = '';
      let espDescription = '';
      try {
        engDescription = fs.readFileSync(engFilePath, 'utf8');
        espDescription = fs.readFileSync(espFilePath, 'utf8');
      } catch (err) {
        console.error(`Error reading text files for ${woodFolder}:`, err);
      }

      // Get the list of image files
      let images = [];
      if (fs.existsSync(imagesDirPath)) {
        images = fs.readdirSync(imagesDirPath).filter(file => file.endsWith('.PNG')).map(image => `/woods/${regionFolder}/${woodFolder}/img/${image}`);
      }

      // Create the wood object and add it to the woodsData array
      woodsData.push({
        name: woodFolder,
        region: regionFolder,
        engDescription,
        espDescription,
        images
      });
    });
  });

  // Write the JSON data to a file
  const jsonData = JSON.stringify(woodsData, null, 2); // Pretty print with 2-space indentation
  fs.writeFileSync(path.join(woodsDir, 'woodsData.json'), jsonData, 'utf8');
  console.log('woodsData.json file has been generated!');
};

// Run the function
generateWoodData();
