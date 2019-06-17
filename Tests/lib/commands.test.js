
const build = require('./build')
const PackageJson = require('../package.json');

const commander = require('./node_modules/commander');



const program = new commander.Command(PackageJson.name)
.version('1.0.0')
.arguments('<project-directory>')
.action(build)
.parse(process.argv)




