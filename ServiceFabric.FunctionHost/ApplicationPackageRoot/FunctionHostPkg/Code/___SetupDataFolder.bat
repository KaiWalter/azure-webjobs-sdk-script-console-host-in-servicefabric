rem copy versioned DataPackage folder to work
cd ..
for /D %%f in (*.Data.*) do XCOPY.EXE %%f\*.* work /S/E
