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
      <View style={styles.View_0_2279}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ee/b9f6/af6bbc5a7d13a145f64e2c57499cac11"
          }}
          style={styles.ImageBackground_0_2280}
        />
        <View style={styles.View_0_2281}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0267/9507/85915d6b7fa4f4cf6656d4d0aa39bd6c"
            }}
            style={styles.ImageBackground_0_2282}
          />
          <View style={styles.View_0_2283}>
            <Text style={styles.Text_0_2283}>Follow</Text>
          </View>
          <View style={styles.View_0_2284}>
            <Text style={styles.Text_0_2284}>amanda_design</Text>
          </View>
          <View style={styles.View_0_2285}>
            <Text style={styles.Text_0_2285}>September 13</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a37/24ff/46042c2498d3da1804caf8c48d754d8e"
            }}
            style={styles.ImageBackground_0_2286}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b019/d5fc/8d352bcfd3c5d0762f7525005efc7886"
          }}
          style={styles.ImageBackground_0_2287}
        />
        <View style={styles.View_0_2289}>
          <View style={styles.View_0_2290}>
            <Text style={styles.Text_0_2290}>
              Interviews with leading designers of large companies
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e95/b962/9249759f22cc7f1cddad9a6ef178ff54"
            }}
            style={styles.ImageBackground_0_2291}
          />
        </View>
        <View style={styles.View_0_2292}>
          <View style={styles.View_0_2293}>
            <View style={styles.View_0_2294} />
            <View style={styles.View_0_2295}>
              <Text style={styles.Text_0_2295}>Up Next</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c019/0e6a/079b7466a9dd66850a7116935f11a603"
              }}
              style={styles.ImageBackground_0_2296}
            />
          </View>
          <View style={styles.View_0_2298}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9338/89c1/c93fb6a2d52cd93346993dc8160997ef"
              }}
              style={styles.ImageBackground_0_2300}
            />
          </View>
          <View style={styles.View_0_2303}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff1a/9ef0/81d9525864490ee15778d478cd2cb0e0"
              }}
              style={styles.ImageBackground_0_2305}
            />
          </View>
          <View style={styles.View_0_2308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f348/fa80/e73497e5dbaec7022beeda66212753a2"
              }}
              style={styles.ImageBackground_0_2310}
            />
          </View>
          <View style={styles.View_0_2312}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ff/00a1/5fe7fd6cf80591d0e506aa620ad1e271"
              }}
              style={styles.ImageBackground_0_2314}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0267/9507/85915d6b7fa4f4cf6656d4d0aa39bd6c"
            }}
            style={styles.ImageBackground_0_2316}
          />
          <View style={styles.View_0_2317}>
            <Text style={styles.Text_0_2317}>37.256 views</Text>
          </View>
          <View style={styles.View_0_2318}>
            <Text style={styles.Text_0_2318}>373 comments</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2319}>
        <View style={styles.View_0_2320} />
        <View style={styles.View_0_2321}>
          <View style={styles.View_0_2322}>
            <Text style={styles.Text_0_2322}>08:31</Text>
          </View>
          <View style={styles.View_0_2323}>
            <View style={styles.View_0_2324} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603a/4742/4cf9ec335c10200100ac72d07d64c3f9"
              }}
              style={styles.ImageBackground_0_2325}
            />
            <View style={styles.View_0_2326} />
          </View>
          <View style={styles.View_0_2327}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d47c/a5e2/eeb59c9bf1a09400e635bd491e9dfdff"
              }}
              style={styles.ImageBackground_0_2329}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2331}>
        <View style={styles.View_0_2332} />
        <View style={styles.View_0_2333} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2279: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_0_2280: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2281: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_2282: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("0.9562841530054662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.26666666666667%")
  },
  View_0_2283: {
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("0.13661202185792476%")
  },
  Text_0_2283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_0_2284: {
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("0%")
  },
  Text_0_2284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_0_2285: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("2.185792349726775%")
  },
  Text_0_2285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2286: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0.27322404371584774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2287: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("2.5956284153005464%")
  },
  View_0_2289: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688527%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2290: {
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_2290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.41999998688697815,
    textTransform: "none"
  },
  ImageBackground_0_2291: {
    width: wp("2.4%"),
    height: hp("0.633462400384288%"),
    top: hp("4.371584699453551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%")
  },
  View_0_2292: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("80.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2293: {
    width: wp("23.200000000000003%"),
    height: hp("4.2349726775956285%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2294: {
    width: wp("23.200000000000003%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752,
    borderColor: "rgba(254, 254, 254, 1)",
    borderWidth: 1
  },
  View_0_2295: {
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.866666666666674%"),
    top: hp("1.2295081967213122%")
  },
  Text_0_2295: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  ImageBackground_0_2296: {
    width: wp("3.733333333333334%"),
    height: hp("1.092896174863388%"),
    top: hp("1.6032234567110635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3315104166666742%")
  },
  View_0_2298: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("6.284153005464475%")
  },
  ImageBackground_0_2300: {
    width: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2303: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.46666666666667%"),
    top: hp("5.054644808743163%")
  },
  ImageBackground_0_2305: {
    width: wp("6.060406494140625%"),
    height: hp("2.6985997059306164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2308: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("5.054644808743163%")
  },
  ImageBackground_0_2310: {
    width: wp("5.866666666666666%"),
    height: hp("3.016264451657488%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2312: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.05517844945355%")
  },
  ImageBackground_0_2314: {
    width: wp("6.309241231282551%"),
    height: hp("2.8109873578848084%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2316: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_0_2317: {
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_2317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_2318: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666663%"),
    top: hp("0%")
  },
  Text_0_2318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_2319: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97.1311475409836%")
  },
  View_0_2320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_2321: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_2322: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("0%")
  },
  Text_0_2322: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_2323: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("0.1366120218579283%")
  },
  View_0_2324: {
    width: wp("67.2%"),
    height: hp("0.4098360655737705%"),
    top: hp("0.614754098360649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  ImageBackground_0_2325: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.06830601092894995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666664%")
  },
  View_0_2326: {
    width: wp("7.466666666666668%"),
    height: hp("0.4098360655737705%"),
    top: hp("0.614754098360649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 254, 254, 1)",
    borderTopLeftRadius: 1.5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 1.5
  },
  View_0_2327: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2329: {
    width: wp("2.933333333333333%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1333333333333333%")
  },
  View_0_2331: {
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
  View_0_2332: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_2333: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
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
