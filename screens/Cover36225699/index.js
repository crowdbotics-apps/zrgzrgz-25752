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
      <View style={styles.View_7_294}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4136/8411/d2001595526cccf06a71645692130ccc"
          }}
          style={styles.ImageBackground_7_295}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2c6/4ac1/699e45345ca5f2b8acb2217bc0153a9e"
          }}
          style={styles.ImageBackground_7_296}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2653/1b76/58639d45a139f78974241490083d9a9e"
          }}
          style={styles.ImageBackground_7_297}
        />
      </View>
      <View style={styles.View_7_303}>
        <Text style={styles.Text_7_303}>Instagram</Text>
      </View>
      <View style={styles.View_7_304}>
        <Text style={styles.Text_7_304}>36 screens</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca9/eacb/fedfa1a32f0def0d676a47475b48e7b3"
        }}
        style={styles.ImageBackground_8_313}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48df/4742/9e8775bf52ab59ab747be30f3197bb70"
        }}
        style={styles.ImageBackground_8_312}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_7_294: {
    width: wp("10.333333333333334%"),
    minWidth: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    minHeight: hp("18.787846420750473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("30.909090909090907%")
  },
  ImageBackground_7_295: {
    width: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_296: {
    width: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_297: {
    width: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_303: {
    width: wp("19.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.333333333333334%"),
    top: hp("54.24242424242425%")
  },
  Text_7_303: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_7_304: {
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.75%"),
    top: hp("64.54545454545455%")
  },
  Text_7_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_313: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("123.03030303030302%"),
    minHeight: hp("123.03030303030302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("27.27272727272727%"),
    resizeMode: "cover",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_8_312: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("123.03030303030302%"),
    minHeight: hp("123.03030303030302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.416666666666664%"),
    top: hp("15.151515151515152%"),
    resizeMode: "cover",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_2: { height: 660 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
