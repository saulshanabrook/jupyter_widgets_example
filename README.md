# Example Jupyter Widgets Project

Example Jupyter widgets projects. Reduced from the cookiecutter to only deploy
remotely on unpkg/jsdeliver instead of making custom jupyterlab and jupyter notebook
packages.

## Development Installation

Create a dev environment:

```bash
conda create -n python_package_name-dev -c conda-forge jupyterlab ipywidgets
conda activate python_package_name-dev
```

### How to see your changes

#### Typescript:

If you use JupyterLab to develop then you can watch the source directory and run JupyterLab at the same time in different
terminals to watch for changes in the extension's source and automatically rebuild the widget.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
yarn run watch
# Run JupyterLab in another terminal
jupyter lab
```

After a change wait for the build to finish and then refresh your browser and the changes should take effect.
