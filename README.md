# URL Shortener

A simple desktop application built with **Python** and **Tkinter** that shortens long URLs using the **TinyURL** service
(via the `pyshorteners` library) and lets you copy the shortened link to your clipboard with one click.

## Features

- Clean, minimal desktop GUI
- Shortens any valid URL using TinyURL
- One-click copy of the shortened URL to clipboard
- Basic error handling (empty input, network/API errors)

## Demo / Preview

```
+------------------------------------------------+
|                  Enter URL:                    |
|         [ https://example.com/...  ]           |
|                                                |
|                 [ Shorten ]                    |
|                                                |
|  Shortened URL: https://tinyurl.com/abc123     |
|                                                |
|            [ Copy Shortened URL ]              |
+------------------------------------------------+
```

## Tech Stack

- **Python 3**
- **Tkinter** – built-in Python GUI library
- **pyshorteners** – Python wrapper for URL shortening services (TinyURL)

## Prerequisites

- Python 3.7 or higher installed on your system
- `pip` (Python package manager)
- An active internet connection (required to contact the TinyURL API)

> **Note:** Tkinter comes bundled with most standard Python installations on Windows and macOS.
>  On Linux, you may need to install it separately .

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yadavrahulrao/url_shortener.git
   cd url_shortener
   ```

2. **(Optional but recommended) Create a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate      # On Windows: venv\Scripts\activate
   ```

3. **Install the required dependency**

   ```bash
   pip install pyshorteners
   ```

4. **Linux only — install Tkinter if not already available**

   ```bash
   sudo apt-get install python3-tk
   ```

## How to Run

Run the script using Python:

```bash
python app.py
```

This will open the Link Shortener desktop window.

### Usage

1. Enter the full URL (including `http://` or `https://`) in the input field.
2. Click **Shorten**.
3. The shortened URL will appear below the button.
4. Click **Copy Shortened URL** to copy it to your clipboard.

## Project Structure

```
.
├── app.py          # Main application script (Tkinter GUI + URL shortening logic)
└── README.md       # Project documentation
```

## Requirements File (optional)

You can create a `requirements.txt` for easier dependency management:

```
pyshorteners
```

Then install all dependencies with:

```bash
pip install -r requirements.txt
```

## Known Issues / Notes

- This file currently also contains an **unused Flask snippet** at the bottom (`Flask`, `render_template`, `app.run`).
- Because `root.mainloop()` blocks execution, this Flask code never actually runs as part of `app.py`.
- If you intend to build a web version of this tool, it should be moved into its own separate file (e.g. `web_app.py`) along with a proper `templates/index.html` file.
- Shortening depends on the third-party TinyURL service being reachable; if TinyURL is down or rate-limits requests, you'll see an error popup.

## Future Improvements

- Add support for multiple URL shortening providers (Bitly, is.gd, etc.)
- Add input validation for malformed URLs
- Add a history/log of previously shortened links
- Convert into a standalone executable using PyInstaller
- Separate the Flask-based web interface into its own working app

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Rahul Yadav-
Git Hub - https://github.com/yadavrahulrao , 
Email - rahul507538@gmail.com

