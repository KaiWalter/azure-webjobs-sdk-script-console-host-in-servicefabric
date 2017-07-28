# azure-webjobs-sdk-script-console-host-in-servicefabric
A Functions console host as Guest executable hosted in Service Fabric

## prerequisites
- `azure-webjobs-sdk-script` repository is cloned to the same parent folder (as this repository)
- `azure-webjobs-sdk-script` / `WebJobs.Script.Host` is build for `release` - its binaries are linked into the code package of this solution
- Function scripts etc. are placed in data package

