import Theme from "./modules/theme.js";
import Timer from "./modules/timer.js";
import Controls from "./modules/controls.js";
import Sounds from "./modules/sounds.js";

const theme = Theme();
const sounds = Sounds();
const timer = Timer();
const controls = Controls({
  Timer,
});
