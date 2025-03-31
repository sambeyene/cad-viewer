// Simple STL file generator for a cube
// This script creates a basic STL file for testing purposes

const fs = require('fs');
const path = require('path');

// Function to create a simple cube STL file
function createCubeSTL() {
  // STL header
  let stlContent = `solid cube
    facet normal 0 0 1
      outer loop
        vertex 0 0 1
        vertex 1 0 1
        vertex 1 1 1
      endloop
    endfacet
    facet normal 0 0 1
      outer loop
        vertex 0 0 1
        vertex 1 1 1
        vertex 0 1 1
      endloop
    endfacet
    facet normal 0 0 -1
      outer loop
        vertex 0 0 0
        vertex 0 1 0
        vertex 1 1 0
      endloop
    endfacet
    facet normal 0 0 -1
      outer loop
        vertex 0 0 0
        vertex 1 1 0
        vertex 1 0 0
      endloop
    endfacet
    facet normal 0 1 0
      outer loop
        vertex 0 1 0
        vertex 0 1 1
        vertex 1 1 1
      endloop
    endfacet
    facet normal 0 1 0
      outer loop
        vertex 0 1 0
        vertex 1 1 1
        vertex 1 1 0
      endloop
    endfacet
    facet normal 0 -1 0
      outer loop
        vertex 0 0 0
        vertex 1 0 0
        vertex 1 0 1
      endloop
    endfacet
    facet normal 0 -1 0
      outer loop
        vertex 0 0 0
        vertex 1 0 1
        vertex 0 0 1
      endloop
    endfacet
    facet normal 1 0 0
      outer loop
        vertex 1 0 0
        vertex 1 1 0
        vertex 1 1 1
      endloop
    endfacet
    facet normal 1 0 0
      outer loop
        vertex 1 0 0
        vertex 1 1 1
        vertex 1 0 1
      endloop
    endfacet
    facet normal -1 0 0
      outer loop
        vertex 0 0 0
        vertex 0 0 1
        vertex 0 1 1
      endloop
    endfacet
    facet normal -1 0 0
      outer loop
        vertex 0 0 0
        vertex 0 1 1
        vertex 0 1 0
      endloop
    endfacet
  endsolid cube`;

  // Write the STL file
  const filePath = path.join(__dirname, 'cube.stl');
  fs.writeFileSync(filePath, stlContent);
  console.log(`STL file created at: ${filePath}`);
}

// Function to create a simple STEP file for a cube
function createSimpleOBJ() {
  // OBJ content for a cube
  let objContent = `# Simple OBJ file for a cube
# Vertices
v 0 0 0
v 1 0 0
v 1 1 0
v 0 1 0
v 0 0 1
v 1 0 1
v 1 1 1
v 0 1 1

# Faces
f 1 2 3 4
f 5 8 7 6
f 1 5 6 2
f 2 6 7 3
f 3 7 8 4
f 4 8 5 1
`;

  // Write the OBJ file
  const filePath = path.join(__dirname, 'simple_cube.obj');
  fs.writeFileSync(filePath, objContent);
  console.log(`OBJ file created at: ${filePath}`);
}

// Create the test files
createCubeSTL();
createSimpleOBJ();
