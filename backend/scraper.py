from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize Selenium WebDriver
driver = webdriver.Chrome()

# URL of the UCSC nutrition page
url = 'https://nutrition.sa.ucsc.edu/'

# Navigate to the URL
driver.get(url)

# List of dining halls to scrape
dining_halls = ['College Nine/John R. Lewis Dining Hall', 'Cowell/Stevenson Dining Hall', 'Crown/Merrill Dining Hall', 'Porter/Kresge Dining Hall', 'Rachel Carson/Oakes Dining Hall']

# Loop through each dining hall
for hall in dining_halls:
    try:
        print(f"Entering {hall}...")  # Print message when entering a dining hall

        # Wait for the dining hall links to be loaded
        WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, "locations")))

        # Use XPath to find the link to the dining hall
        xpath = f"//a[contains(text(), '{hall}')]"
        link = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, xpath)))
        link.click()

        # Wait for the nutrition calculator link to be clickable
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.LINK_TEXT, "Nutrition Calculator")))

        # Click the nutrition calculator link
        driver.find_element(By.LINK_TEXT, "Nutrition Calculator").click()

    except Exception as e:
        print(f"An error occurred while processing {hall}: {e}")
        driver.save_screenshot(f"error_{hall}.png")  # Save a screenshot for debugging
        print("Page Source:", driver.page_source)  # Print page source for review

    finally:
        print(f"Exiting {hall}...")  # Print message when exiting a dining hall
        # Navigate back to the main page for the next dining hall
        driver.get(url)

# Close the WebDriver
driver.quit()
