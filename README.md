# NALug RSS reader - How to build a Gnome extension workshop

## Overview

NALug RSS Reader is a Gnome Shell extension that adds an icon in the systray to show the last articles from the <https://www.nalug.tech/> website.

This extension is very simple and it used as POC for a workshop for a NALug meeting.

## Installation

To install the extension, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gigitux/nalug-rss-reader-gnome-extension
   ```

2. **Install the Extension:**

   ```bash
   mkdir -p ~/.local/share/gnome-shell/extensions/nalugrssreader@luigitesch.io
   mv -v * ~/.local/share/gnome-shell/extensions/nalugrssreader@luigitesch.io
   ```

   This command will copy the extension files to the appropriate directory.

3. **Enable the Extension:**
   Use Gnome Tweaks or run the following command to enable the extension:

   ```bash
   gnome-extensions enable nalugrssreader@luigitesch.io
   ```

## Contributing

If you want to contribute to NALug RSS reader follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and test thoroughly.
5. Commit your changes with a descriptive commit message.
6. Push your branch to your fork on GitHub.
7. Open a pull request to the main repository.

## Reporting Issues

If you encounter any issues or have suggestions, please open an issue on the [issue tracker](https://github.com/gigitux/nalug-rss-reader-gnome-extension/issues).

## License

This Gnome extension is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details.

