import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://pqina.nl/blog/fix-html-video-autoplay-not-working/')

  // keep browser open
  await page.pause()
})