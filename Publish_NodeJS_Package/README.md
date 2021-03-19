Publishing a real NodeJS package: Project Bootstrap

1. Run the release script: npm run release

The standard-version will update the CHANGELOG.md and the package version. 
The postrelease script will push these modifications into the git repository with a new version tag.

Just to make sure that we don’t publish any unnecessary files in the package, run the 'npm pack' command. 
The node will generate the tar file of the package without publishing it. 
If the content of this archive is okay, we can publish our new package:

2. npm login

3. npm publish

4. Check the result on npmjs.com: