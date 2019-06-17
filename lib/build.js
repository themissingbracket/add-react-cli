/**
 * @module takes in the commands provided and builds the APP
 */

 const {blue} = require('colors')

const path = require('path')
 const Build = (dirname)=>{
     console.log(`Building ${blue(GetDirName(dirname))}`)
 }

 const GetDirName = (dirname)=>{
    const regex = /\./
    if(regex.test(dirname))return process.cwd()
    else return path.resolve(dirname)
 }


 module.exports = Build