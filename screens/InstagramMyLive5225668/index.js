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
      <View style={styles.View_0_426}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5beb/0c68/285624a448993d57425c3736472d7643"
          }}
          style={styles.ImageBackground_0_427}
        />
        <View style={styles.View_0_428}>
          <View style={styles.View_0_429} />
          <View style={styles.View_0_430}>
            <View style={styles.View_0_431} />
            <View style={styles.View_0_432}>
              <Text style={styles.Text_0_432}>LIVE</Text>
            </View>
          </View>
          <View style={styles.View_0_433}>
            <View style={styles.View_0_434} />
            <View style={styles.View_0_435}>
              <Text style={styles.Text_0_435}>1</Text>
            </View>
            <View style={styles.View_0_436}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e74/e600/8cdb6e5a638ad907d980335672e9b5a2"
                }}
                style={styles.ImageBackground_0_438}
              />
            </View>
          </View>
          <View style={styles.View_0_440}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27cc/7487/2d90c399d5510dfde4953ecade868a3a"
              }}
              style={styles.ImageBackground_0_442}
            />
          </View>
          <View style={styles.View_0_444}>
            <Text style={styles.Text_0_444}>End</Text>
          </View>
        </View>
        <View style={styles.View_0_445}>
          <View style={styles.View_0_446}>
            <Text style={styles.Text_0_446}>maxjacobson joined</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec32/d462/0461ee778c02ca0293bdf1758d0c4244"
            }}
            style={styles.ImageBackground_0_447}
          />
          <View style={styles.View_0_448}>
            <View style={styles.View_0_449} />
            <View style={styles.View_0_450}>
              <Text style={styles.Text_0_450}>Wave</Text>
            </View>
            <View style={styles.View_0_451}>
              <Text style={styles.Text_0_451}>👋</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_452}>
          <View style={styles.View_0_453}>
            <Text style={styles.Text_0_453}>
              We&#39;re telling your followers that you’ve started a live video.
            </Text>
          </View>
          <View style={styles.View_0_454}>
            <Text style={styles.Text_0_454}>
              Hang on! We&#39;re telling more followers to join your video.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_455}>
        <View style={styles.View_0_456} />
        <View style={styles.View_0_457}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45a/92ae/b13004a608177c2fa71368d209593dfb"
            }}
            style={styles.ImageBackground_0_458}
          />
          <View style={styles.View_0_459}>
            <View style={styles.View_0_460} />
            <View style={styles.View_0_461}>
              <Text style={styles.Text_0_461}>Comment</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f1e/af4c/f87e4afa215511c9c9ad06d15924246a"
              }}
              style={styles.ImageBackground_0_463}
            />
          </View>
          <View style={styles.View_0_466}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ff7/3f23/7ea8852228a080d4f73e1cf5c0d499f6"
              }}
              style={styles.ImageBackground_0_468}
            />
          </View>
          <View style={styles.View_0_473}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f5b/ed0d/198f0736d06ab18317ad3f7b58dcbf33"
              }}
              style={styles.ImageBackground_0_475}
            />
          </View>
          <View style={styles.View_0_478}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e8d/59c0/6ce3cff473a9961355bd457ba93942e8"
              }}
              style={styles.ImageBackground_0_480}
            />
          </View>
          <View style={styles.View_0_489}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b931/a3f4/64cefa007576996a0978d3db21da27a0"
              }}
              style={styles.ImageBackground_0_491}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_497}>
        <View style={styles.View_0_498} />
        <View style={styles.View_0_499} />
      </View>
      <View style={styles.View_0_15082}>
        <View style={styles.View_0_15083} />
        <View style={styles.View_0_15084}>
          <View style={styles.View_0_15085} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_0_15086}
          />
          <View style={styles.View_0_15087} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a81/a486/e97c58eda055bd0cc4f2bec410cc0ee3"
          }}
          style={styles.ImageBackground_0_15088}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_0_15092}
        />
        <View style={styles.View_0_15097}>
          <View style={styles.View_0_15098}>
            <Text style={styles.Text_0_15098}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_426: {
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
  ImageBackground_0_427: {
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
  View_0_428: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_429: {
    width: wp("100%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_430: {
    width: wp("10.4%"),
    height: hp("3.6885245901639343%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_431: {
    width: wp("10.266666666666667%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333286%")
  },
  View_0_432: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1.024590163934426%")
  },
  Text_0_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_433: {
    width: wp("9.6%"),
    height: hp("3.6885245901639343%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_434: {
    width: wp("9.466666666666667%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_0_435: {
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666681%"),
    top: hp("1.024590163934426%")
  },
  Text_0_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_436: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4223307291666814%"),
    top: hp("1.3661202185792343%")
  },
  ImageBackground_0_438: {
    width: wp("2.6425938924153645%"),
    height: hp("1.092896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_440: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("1.3661202185792352%")
  },
  ImageBackground_0_442: {
    width: wp("6.3299311319986975%"),
    height: hp("3.1816412190921968%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_444: {
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    top: hp("2.3224043715846987%")
  },
  Text_0_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_0_445: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000003%"),
    top: hp("85.04098360655738%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_446: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.8%"),
    top: hp("1.4344262295081904%")
  },
  Text_0_446: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_447: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_448: {
    width: wp("21.6%"),
    height: hp("4.781420765027322%"),
    top: hp("0.06830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.80000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_449: {
    width: wp("21.6%"),
    height: hp("4.781420765027322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_0_450: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.199999999999989%"),
    top: hp("1.3661202185792263%")
  },
  Text_0_450: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_451: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.024590163934434%")
  },
  Text_0_451: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: -0.009999999776482582,
    textTransform: "none"
  },
  View_0_452: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("77.04918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_453: {
    width: wp("74.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_453: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_0_454: {
    width: wp("81.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%")
  },
  Text_0_454: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_0_455: {
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
  View_0_456: {
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
  View_0_457: {
    width: wp("91.86666666666666%"),
    minWidth: wp("91.86666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000003%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_0_458: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.2%"),
    top: hp("1.0928961748633839%"),
    resizeMode: "cover",
    borderColor: "rgba(254, 254, 254, 1)",
    borderWidth: 1
  },
  View_0_459: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_460: {
    width: wp("32%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(121, 121, 121, 1)",
    borderWidth: 1
  },
  View_0_461: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5333333333333337%"),
    top: hp("1.7759562841530112%")
  },
  Text_0_461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_0_463: {
    width: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.400000000000002%")
  },
  View_0_466: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.947460937500004%"),
    top: hp("0.7506990693306079%")
  },
  ImageBackground_0_468: {
    width: wp("7.2805440266927075%"),
    minWidth: wp("7.2805440266927075%"),
    height: hp("3.903756897306182%"),
    minHeight: hp("3.903756897306182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_473: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.400000000000006%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_0_475: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_478: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.333333333333336%"),
    top: hp("0.7855191256830665%")
  },
  ImageBackground_0_480: {
    width: wp("7.6%"),
    minWidth: wp("7.6%"),
    height: hp("3.893470503593403%"),
    minHeight: hp("3.893470503593403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_489: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("0.7172131147541023%")
  },
  ImageBackground_0_491: {
    width: wp("7.73368631998698%"),
    minWidth: wp("7.73368631998698%"),
    height: hp("3.961771563754056%"),
    minHeight: hp("3.961771563754056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_497: {
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
  View_0_498: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_499: {
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
  View_0_15082: {
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
  View_0_15083: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_15084: {
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
  View_0_15085: {
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
  ImageBackground_0_15086: {
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
  View_0_15087: {
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
  ImageBackground_0_15088: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_0_15092: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_0_15097: {
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
  View_0_15098: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_15098: {
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
