#import "AppDelegate.h"
#import <GoogleSignIn/GoogleSignIn.h>
#import <React/RCTBundleURLProvider.h>
#import <Firebase.h>
#import <GoogleMaps/GoogleMaps.h>

//#import <FBSDKCoreKit/FBSDKCoreKit.h>
//#import <FBSDKCoreKit/FBSDKCoreKit-swift.h> // <- Add This Import

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  [FIRApp configure];
  [GMSServices provideAPIKey:@"AIzaSyDQ_pjAQYvVcGWNLy-ND_ZtyufjXtiUAxs"]; // add this line using the api key obtained from Google Console


  self.moduleName = @"saltstylelist";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};


  return [super application:application didFinishLaunchingWithOptions:launchOptions];

}

// AppDelegate.m
- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
  return [GIDSignIn.sharedInstance handleURL:url];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}


@end
