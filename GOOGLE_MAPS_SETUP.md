# Google Maps Setup

To use the real Google Maps in this application, you need to:

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API"
   - Create credentials (API Key)

2. **Set up the environment variable:**
   Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Replace the placeholder:**
   Replace `your_actual_api_key_here` with your real Google Maps API key

4. **Restart the development server:**
   ```bash
   npm run dev
   ```

## Features Added:
- Real Google Maps with interactive markers
- Custom hotel markers with different colors
- Zoom controls (functional)
- "Fit to bounds" button to show all hotels
- Click markers to show hotel details
- Proper TypeScript support

## Note:
The map will show a loading state until you provide a valid API key.
