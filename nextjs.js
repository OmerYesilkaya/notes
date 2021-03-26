// create-next-app --examples typescript project requires code below to run @react-three/drei componets (i.e. OrbitControls)
const withTM = require("next-transpile-modules")(["@react-three/drei", "three"]);
module.exports = withTM();
