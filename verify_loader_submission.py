import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Start a local server
        process = await asyncio.create_subprocess_shell(
            "npx serve -s . -p 3000",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        await asyncio.sleep(2)  # Wait for server to start

        try:
            await page.goto("http://localhost:3000")

            # Check for loader overlay
            loader = page.locator("#loader-overlay")
            await loader.wait_for(state="visible")
            print("Loader is visible.")

            # Take screenshot of loader
            os.makedirs("playwright-screenshots", exist_ok=True)
            await page.screenshot(path="playwright-screenshots/loader_final.png")

            # Wait for loader to disappear
            await loader.wait_for(state="hidden", timeout=30000)
            print("Loader hidden after preloading.")

            # Take screenshot of loaded state
            await page.screenshot(path="playwright-screenshots/loaded_state.png")

        finally:
            process.terminate()
            await process.wait()

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
