# Development and Build Guide

This guide explains how to run your app in development mode and how to build standalone versions.

## Development Mode

Development mode is faster for testing changes and supports hot reloading:

```bash
# Start the development server
pnpm start

# Start and open in iOS simulator (development)
pnpm ios

# Start and open in Android emulator (development)
pnpm android

# Start web version (development)
pnpm web
```

In development mode, you can use the Expo Go app on physical devices or run in simulators.

## Building Native Apps

When you need to create standalone versions of your app:

### Prerequisites

Before building:

1. For Android: Install Android Studio and configure the Android SDK
2. For iOS: You must be on macOS with Xcode installed

### Build Commands

Build and run a standalone Android app:

```bash
pnpm build:android
```

Build and run a standalone iOS app (macOS only):

```bash
pnpm build:ios
```

These commands will:

1. Generate native projects if they don't exist
2. Build a complete standalone app
3. Install and run on a connected device or simulator

## Development vs. Build: When to Use Each

Use **development mode** (

> my-app@1.0.0 ios /expo-boilerplate
> expo start --ios

Starting project at /expo-boilerplate
env: load .env
env: export SUPABASE_URL SUPABASE_ANON_KEY
Starting Metro Bundler
 ELIFECYCLE  Command failed with exit code 1.,

> my-app@1.0.0 android /expo-boilerplate
> expo start --android

Starting project at /expo-boilerplate
env: load .env
env: export SUPABASE_URL SUPABASE_ANON_KEY
Starting Metro Bundler
 ELIFECYCLE  Command failed with exit code 1.) when:

- Actively developing and making frequent changes
- You need fast refresh and hot reloading
- You're using features compatible with Expo Go

Use **build commands** (

> my-app@1.0.0 build:ios /expo-boilerplate
> expo run:ios

env: load .env
env: export SUPABASE_URL SUPABASE_ANON_KEY
env: load .env
env: export SUPABASE_URL SUPABASE_ANON_KEY

📝 iOS Bundle Identifier Learn more: https://expo.fyi/bundle-identifier

ELIFECYCLE  Command failed with exit code 1.,

> my-app@1.0.0 build:android /expo-boilerplate
> expo run:android

env: load .env
env: export SUPABASE_URL SUPABASE_ANON_KEY
env: load .env
env: export SUPABASE_URL SUPABASE_ANON_KEY

📝 Android package Learn more: https://expo.fyi/android-package

ELIFECYCLE  Command failed with exit code 1.) when:

- Testing the final app experience
- Using custom native modules
- Preparing for distribution
- Testing performance under production conditions

## First Build Notes

The first time you run a build:

- It will take significantly longer (subsequent builds are faster)
- Native projects will be generated in and folders
- You can customize these native projects for advanced needs
