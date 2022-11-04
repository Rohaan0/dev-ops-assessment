
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:5500/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


it ('shows your choices when draw is clicked', async () => {
        const draw = await driver.findElement(By.id('draw')).click
        draw
        const choices = await driver.findElement(By.id('choices'))
        const displayed = choices.isDisplayed()
        expect(displayed).toBe(true)
        driver.sleep(5000)
})


it ('shows your choices when draw is clicked', async () => {
    const draw = await driver.findElement(By.id('draw')).click()
    draw
    await driver.findElement(By.xpath('//button[text()=Add to Duo]')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = playerDuo.isDisplayed()
    expect(displayed).toBe(true)
    driver.sleep(5000)
})