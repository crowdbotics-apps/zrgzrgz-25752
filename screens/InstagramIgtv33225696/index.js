import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_3251}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd11/38ea/4c714a82e8e8d8ae81be57b267fe7222"
          }}
          style={styles.ImageBackground_0_3252}
        />
        <View style={styles.View_0_3253}>
          <Text style={styles.Text_0_3253}>9:14</Text>
        </View>
        <View style={styles.View_0_3254}>
          <View style={styles.View_0_3255}>
            <Text style={styles.Text_0_3255}>37.2k views</Text>
          </View>
          <View style={styles.View_0_3256}>
            <Text style={styles.Text_0_3256}>amanda_design</Text>
          </View>
          <View style={styles.View_0_3257}>
            <Text style={styles.Text_0_3257}>
              Interviews with leading designers of large compa…
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_3258}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54f6/b3b6/4d199b4067558132191b23615c8490d2"
          }}
          style={styles.ImageBackground_0_3259}
        />
        <View style={styles.View_0_3260}>
          <Text style={styles.Text_0_3260}>5:23</Text>
        </View>
        <View style={styles.View_0_3261}>
          <View style={styles.View_0_3262}>
            <Text style={styles.Text_0_3262}>52.4k views</Text>
          </View>
          <View style={styles.View_0_3263}>
            <Text style={styles.Text_0_3263}>photo.master</Text>
          </View>
          <View style={styles.View_0_3264}>
            <Text style={styles.Text_0_3264}>
              Regular and studio shooting comparison
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_3265}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ed/8245/59df0cbbc477f35bde6401077e7f56fd"
          }}
          style={styles.ImageBackground_0_3266}
        />
        <View style={styles.View_0_3267}>
          <Text style={styles.Text_0_3267}>9:14</Text>
        </View>
        <View style={styles.View_0_3268}>
          <View style={styles.View_0_3269}>
            <Text style={styles.Text_0_3269}>16.8k views</Text>
          </View>
          <View style={styles.View_0_3270}>
            <Text style={styles.Text_0_3270}>marine_bio</Text>
          </View>
          <View style={styles.View_0_3271}>
            <Text style={styles.Text_0_3271}>Ocean life - Indian Ocean</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_3272}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd26/0426/ed59639ea12308ce0a45bd8d4b3d6536"
          }}
          style={styles.ImageBackground_0_3273}
        />
        <View style={styles.View_0_3274}>
          <Text style={styles.Text_0_3274}>5:23</Text>
        </View>
        <View style={styles.View_0_3275}>
          <View style={styles.View_0_3276}>
            <Text style={styles.Text_0_3276}>37.2k views</Text>
          </View>
          <View style={styles.View_0_3277}>
            <Text style={styles.Text_0_3277}>photo.master</Text>
          </View>
          <View style={styles.View_0_3278}>
            <Text style={styles.Text_0_3278}>Cute badges - DIY</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e13/5ff5/a4ae96298a746c2cbfaa5b6ca5cca384"
        }}
        style={styles.ImageBackground_0_3279}
      />
      <View style={styles.View_0_3280}>
        <View style={styles.View_0_3281} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca95/b1bb/6fa8de8d5e3d9268a11892128be9718d"
          }}
          style={styles.ImageBackground_0_3282}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a64/f35e/f690660d10bd9a707833da8def2cefef"
          }}
          style={styles.ImageBackground_0_3284}
        />
        <View style={styles.View_0_3286}>
          <Text style={styles.Text_0_3286}>IGTV</Text>
        </View>
        <View style={styles.View_0_3287}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fd1/a63a/63daad09b85dce41c4e904efde0bd7df"
            }}
            style={styles.ImageBackground_0_3289}
          />
        </View>
      </View>
      <View style={styles.View_0_3291}>
        <View style={styles.View_0_3292} />
        <View style={styles.View_0_3293} />
      </View>
      <View style={styles.View_0_15575}>
        <View style={styles.View_0_15576} />
        <View style={styles.View_0_15577}>
          <View style={styles.View_0_15578} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_0_15579}
          />
          <View style={styles.View_0_15580} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_0_15581}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_0_15585}
        />
        <View style={styles.View_0_15590}>
          <View style={styles.View_0_15591}>
            <Text style={styles.Text_0_15591}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_3251: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_3252: {
    width: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3253: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("1.3661202185792405%")
  },
  Text_0_3253: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_0_3254: {
    width: wp("43.46666666666666%"),
    height: hp("8.333333333333332%"),
    top: hp("30.191256830601084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3255: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.4207650273224175%")
  },
  Text_0_3255: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3256: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_0_3256: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3257: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_3257: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_3258: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("51.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_3259: {
    width: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3260: {
    width: wp("6.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.73333333333333%"),
    top: hp("1.3661202185792405%")
  },
  Text_0_3260: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_0_3261: {
    width: wp("43.46666666666666%"),
    height: hp("8.333333333333332%"),
    top: hp("30.191256830601084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3262: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.4207650273224175%")
  },
  Text_0_3262: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3263: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%")
  },
  Text_0_3263: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3264: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_3264: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_3265: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_3266: {
    width: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3267: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("1.3661202185792263%")
  },
  Text_0_3267: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_0_3268: {
    width: wp("43.46666666666666%"),
    height: hp("6.420765027322404%"),
    top: hp("32.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3269: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_0_3269: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3270: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3224043715847102%")
  },
  Text_0_3270: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3271: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_3271: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_3272: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("91.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_3273: {
    width: wp("49.86666666666667%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3274: {
    width: wp("6.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.73333333333333%"),
    top: hp("1.3661202185792263%")
  },
  Text_0_3274: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_0_3275: {
    width: wp("43.46666666666666%"),
    height: hp("6.420765027322404%"),
    top: hp("32.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3276: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  Text_0_3276: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3277: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3224043715847102%")
  },
  Text_0_3277: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.019999999552965164,
    textTransform: "none"
  },
  View_0_3278: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_3278: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  ImageBackground_0_3279: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3280: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3281: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_3282: {
    width: wp("2.666666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  ImageBackground_0_3284: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("7.616120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.93333333333334%")
  },
  View_0_3286: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("7.650273224043716%")
  },
  Text_0_3286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_0_3287: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.73333333333333%"),
    top: hp("7.377049180327869%")
  },
  ImageBackground_0_3289: {
    width: wp("6.230389404296875%"),
    height: hp("3.1917978505619233%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3291: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3292: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_3293: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  View_0_15575: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_15576: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_15577: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.42220052083333%"),
    top: hp("2.3679305946892075%")
  },
  View_0_15578: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_0_15579: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.5009218643271858%")
  },
  View_0_15580: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_15581: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_0_15585: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_0_15590: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.912568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_15591: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_15591: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
