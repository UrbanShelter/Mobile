# Deploying the app

```
git clone https://github.com/UrbanShelter/Mobile.git
cd Mobile
npm install
npm install -g exp
exp start --tunnel
```

# Running the app

1. Download the Expo app from the Play Store (Android) or App Store (iOS)
2. Sign in. Once the app is deployed on the same network as your phone, it should appear on the screen. Open it to view the app.

# Building the app

The app is built on Expo servers.
_note: building the iOS app requires an Apple Developer account_

### iOS
```
exp build:ios
```

### iOS
```
exp build:android
```

Once the app is built a link would be provided to download it. This can then be installed on the respective device. Alternatively, it will also be published to your Expo account and may be accessed there.