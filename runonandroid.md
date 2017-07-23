### AndroidManifest.xml

Paste this at the top of your file inside manifest tag

`<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>`

Paste this inside the applicatin tag with your API key.
`<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="YOUR_API_KEY"
/>`


### MainApplication.java
import this at the top of the file

`import com.airbnb.android.react.maps.MapsPackage;`

Paste `new MapsPackage()` inside <ReactPackage>asList.
`@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
      ......
        new MapsPackage()
        `

### Settings.gradle
`
include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')
`

### Build.gradle

Paste this inside dependencies

`
compile project(':react-native-maps')
compile ('com.google.android.gms:play-services-base:10.2.4') {
     force = true;
}
compile ('com.google.android.gms:play-services-maps:10.2.4') {
     force = true;
}
compile ('com.google.android.gms:play-services-places:10.2.4') {
     force = true;
}
compile ('com.google.android.gms:play-services-location:10.2.4') {
    force = true;
}
`