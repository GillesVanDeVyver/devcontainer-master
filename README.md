# Charp Development Container


## Prerequisites

- Docker CE (https://docs.docker.com/get-docker/)
- VSCode (https://code.visualstudio.com/)

## Setting up the development container

Follow these steps to open this sample in a container:

1. If this is your first time using a development container, please follow the [getting started steps](https://aka.ms/vscode-remote/containers/getting-started).

2. To use this repository, you can either open the repository in an isolated Docker volume:

   - Press <kbd>F1</kbd> and select the **Remote-Containers: Open Repository in Container** command
   - Then type: <code>charphq/devcontainer</code>
   - Choose the volume of preference
   - Wait for the container to start, and try things out!

   Or open a locally cloned copy of the code:

   - Clone this repository to your local filesystem.
   - Press <kbd>F1</kbd> and select the **Remote-Containers: Open Folder in Container...** command.
   - Select the cloned copy of this folder, wait for the container to start, and try things out!

## Compile & Run

1. `npm run-script compile`
2. `npm run-script start`

## Add your own VSCode Extensions

Feel free to tweak the `devcontainer.json` file by adding your own ExtensionId's to the list.
