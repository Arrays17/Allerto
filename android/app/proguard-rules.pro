# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

-addconfigurationdebugging
-verbose
-keep class com.facebook.react.views.** { *; }
-keep class com.swmansion.rnscreens.** { *; }
-keep class com.horcrux.svg.** { *; }
-keep class com.th3rdwave.safeareacontext.** { *; }
-keep class com.reactnativepagerview.PagerViewViewManager
-keep class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
-keep class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
-keep class org.reactnative.maskedview.RNCMaskedViewManager
-keep class expo.modules.adapters.react.views.SimpleViewManagerAdapter
-keep class com.facebook.react.uimanager.LayoutShadowNode
-keepclassmembers class com.facebook.react.turbomodule.core.CallInvokerHolderImpl {<methods>;}
-keepclassmembers class com.facebook.react.turbomodule.core.CallInvokerHolderImpl {<fields>;}
-keepclassmembers class com.facebook.yoga.YogaConfig {<methods>;}
-keepclassmembers class expo.modules.adapters.react.apploader.RNHeadlessAppLoader {<methods>;}
-keepclassmembers class com.google.android.gms.internal.location.zzb {<methods>;}
-keepclassmembers class expo.modules.location.taskConsumers.LocationTaskConsumer {<methods>;}
-keepclassmembers class expo.modules.backgroundfetch.BackgroundFetchTaskConsumer {<methods>;}