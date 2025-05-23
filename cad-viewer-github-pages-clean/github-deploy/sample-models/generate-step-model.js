// Simple STEP file generator for testing
// This script creates a basic STEP file structure for testing purposes

const fs = require('fs');
const path = require('path');

// Function to create a simple STEP file
function createSimpleSTEP() {
  // STEP file header and basic structure
  // This is a simplified version and not a fully valid STEP file
  // but should be sufficient for testing file loading functionality
  let stepContent = `ISO-10303-21;
HEADER;
FILE_DESCRIPTION(('A simple test cube'),'2;1');
FILE_NAME('test_cube.step','2025-03-31T14:53:00',('CAD Viewer Test'),('CAD Viewer'),'','','');
FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 3 1 1 }'));
ENDSEC;
DATA;
#1 = APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#2);
#2 = APPLICATION_CONTEXT('core data for automotive mechanical design processes');
#3 = SHAPE_DEFINITION_REPRESENTATION(#4,#10);
#4 = PRODUCT_DEFINITION_SHAPE('','',#5);
#5 = PRODUCT_DEFINITION('design','',#6,#9);
#6 = PRODUCT_DEFINITION_FORMATION('','',#7);
#7 = PRODUCT('Test Cube','Test Cube','A simple test cube',(#8));
#8 = PRODUCT_CONTEXT('',#2,'mechanical');
#9 = PRODUCT_DEFINITION_CONTEXT('part definition',#2,'design');
#10 = ADVANCED_BREP_SHAPE_REPRESENTATION('',(#11,#15),#41);
#11 = AXIS2_PLACEMENT_3D('',#12,#13,#14);
#12 = CARTESIAN_POINT('',(0.,0.,0.));
#13 = DIRECTION('',(0.,0.,1.));
#14 = DIRECTION('',(1.,0.,0.));
#15 = MANIFOLD_SOLID_BREP('',#16);
#16 = CLOSED_SHELL('',(#17,#25,#33));
#17 = ADVANCED_FACE('',(#18),#22,.T.);
#18 = FACE_OUTER_BOUND('',#19,.T.);
#19 = EDGE_LOOP('',(#20));
#20 = ORIENTED_EDGE('',*,*,#21,.T.);
#21 = EDGE_CURVE('',#23,#23,#24,.T.);
#22 = PLANE('',#23);
#23 = AXIS2_PLACEMENT_3D('',#24,#25,#26);
#24 = CARTESIAN_POINT('',(0.,0.,0.));
#25 = DIRECTION('',(0.,0.,1.));
#26 = DIRECTION('',(1.,0.,0.));
#27 = ADVANCED_FACE('',(#28),#32,.T.);
#28 = FACE_OUTER_BOUND('',#29,.T.);
#29 = EDGE_LOOP('',(#30));
#30 = ORIENTED_EDGE('',*,*,#31,.T.);
#31 = EDGE_CURVE('',#33,#33,#34,.T.);
#32 = PLANE('',#33);
#33 = AXIS2_PLACEMENT_3D('',#34,#35,#36);
#34 = CARTESIAN_POINT('',(0.,0.,10.));
#35 = DIRECTION('',(0.,0.,1.));
#36 = DIRECTION('',(1.,0.,0.));
#37 = ADVANCED_FACE('',(#38),#40,.F.);
#38 = FACE_OUTER_BOUND('',#39,.T.);
#39 = EDGE_LOOP('',(#40));
#40 = ORIENTED_EDGE('',*,*,#21,.F.);
#41 = ( GEOMETRIC_REPRESENTATION_CONTEXT(3) GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#42)) GLOBAL_UNIT_ASSIGNED_CONTEXT((#43,#44,#45)) REPRESENTATION_CONTEXT('Context #1','3D Context') );
#42 = UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(1.E-07),#43,'distance_accuracy_value','confusion accuracy');
#43 = ( LENGTH_UNIT() NAMED_UNIT(*) SI_UNIT(.MILLI.,.METRE.) );
#44 = ( NAMED_UNIT(*) PLANE_ANGLE_UNIT() SI_UNIT($,.RADIAN.) );
#45 = ( NAMED_UNIT(*) SI_UNIT($,.STERADIAN.) SOLID_ANGLE_UNIT() );
ENDSEC;
END-ISO-10303-21;`;

  // Write the STEP file
  const filePath = path.join(__dirname, 'test_cube.step');
  fs.writeFileSync(filePath, stepContent);
  console.log(`STEP file created at: ${filePath}`);
}

// Create the STEP test file
createSimpleSTEP();
