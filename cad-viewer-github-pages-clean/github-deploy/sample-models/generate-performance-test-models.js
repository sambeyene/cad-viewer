// Performance optimization test script
// This script tests the application with different model sizes and measures performance

const fs = require('fs');
const path = require('path');

// Function to create a complex OBJ file with many cubes
function createComplexOBJ(numCubes) {
  let vertices = [];
  let faces = [];
  
  // Create vertices and faces for multiple cubes
  for (let i = 0; i < numCubes; i++) {
    const offsetX = (i % 10) * 2;
    const offsetY = Math.floor(i / 10) % 10 * 2;
    const offsetZ = Math.floor(i / 100) * 2;
    
    // Add 8 vertices for each cube
    const baseIndex = i * 8 + 1; // OBJ indices start at 1
    
    // Add cube vertices
    vertices.push(`v ${offsetX} ${offsetY} ${offsetZ}`);
    vertices.push(`v ${offsetX + 1} ${offsetY} ${offsetZ}`);
    vertices.push(`v ${offsetX + 1} ${offsetY + 1} ${offsetZ}`);
    vertices.push(`v ${offsetX} ${offsetY + 1} ${offsetZ}`);
    vertices.push(`v ${offsetX} ${offsetY} ${offsetZ + 1}`);
    vertices.push(`v ${offsetX + 1} ${offsetY} ${offsetZ + 1}`);
    vertices.push(`v ${offsetX + 1} ${offsetY + 1} ${offsetZ + 1}`);
    vertices.push(`v ${offsetX} ${offsetY + 1} ${offsetZ + 1}`);
    
    // Add 6 faces for each cube
    faces.push(`f ${baseIndex} ${baseIndex + 1} ${baseIndex + 2} ${baseIndex + 3}`); // bottom
    faces.push(`f ${baseIndex + 4} ${baseIndex + 7} ${baseIndex + 6} ${baseIndex + 5}`); // top
    faces.push(`f ${baseIndex} ${baseIndex + 4} ${baseIndex + 5} ${baseIndex + 1}`); // front
    faces.push(`f ${baseIndex + 1} ${baseIndex + 5} ${baseIndex + 6} ${baseIndex + 2}`); // right
    faces.push(`f ${baseIndex + 2} ${baseIndex + 6} ${baseIndex + 7} ${baseIndex + 3}`); // back
    faces.push(`f ${baseIndex + 3} ${baseIndex + 7} ${baseIndex + 4} ${baseIndex + 0}`); // left
  }
  
  // Combine into OBJ content
  let objContent = `# Complex OBJ file with ${numCubes} cubes for performance testing\n`;
  objContent += `# Generated on ${new Date().toISOString()}\n\n`;
  objContent += vertices.join('\n') + '\n\n';
  objContent += faces.join('\n') + '\n';
  
  // Write the OBJ file
  const filePath = path.join(__dirname, `complex_${numCubes}_cubes.obj`);
  fs.writeFileSync(filePath, objContent);
  console.log(`Complex OBJ file with ${numCubes} cubes created at: ${filePath}`);
}

// Create test files with different complexity levels
console.log("Generating performance test models...");
createComplexOBJ(10);    // Simple model
createComplexOBJ(100);   // Medium complexity
createComplexOBJ(500);   // High complexity for stress testing

console.log("Performance test models generation complete!");
