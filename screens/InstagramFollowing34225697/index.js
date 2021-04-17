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
      <View style={styles.View_0_3296}>
        <View style={styles.View_0_3295} />
        <View style={styles.View_0_3297}>
          <Text style={styles.Text_0_3297}>karennne liked 3 posts. 3h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2dc/ef2f/f17fa226a200109154a7978ad79f2852"
          }}
          style={styles.ImageBackground_0_3298}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3f/fd39/3d0b6cd7a9359f4b2a0128d8e1983f33"
          }}
          style={styles.ImageBackground_0_3299}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eed8/c347/e8995d17af7479bf8f97f7b33e57d70c"
          }}
          style={styles.ImageBackground_0_3300}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3bc/1fe6/2d877f223b110cf133a7a44b51d7d446"
          }}
          style={styles.ImageBackground_0_3301}
        />
      </View>
      <View style={styles.View_0_3311}>
        <View style={styles.View_0_3310} />
        <View style={styles.View_0_3312}>
          <Text style={styles.Text_0_3312}>craig_love liked 8 posts. 3h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97fd/b9f7/4754dd54981b15f429673cc3c742130a"
          }}
          style={styles.ImageBackground_0_3313}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15a3/7334/acb9fadfdee8da4446c69deacde72f00"
          }}
          style={styles.ImageBackground_0_3314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f036/f3fa/43fa98cd420f209be1a74cc17da00d04"
          }}
          style={styles.ImageBackground_0_3315}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/015b/0133/0537b70d626f2ee7b695e59d3a9825b6"
          }}
          style={styles.ImageBackground_0_3316}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42c9/088b/63b395fc8c6ac64946dcb4c46d9bdfe9"
          }}
          style={styles.ImageBackground_0_3317}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37dd/24d2/817884bf5ce5e080da8ecfef816d4ef1"
          }}
          style={styles.ImageBackground_0_3318}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/156a/b18c/460bcab563a4d6fd95108fdd5bbeb99d"
          }}
          style={styles.ImageBackground_0_3319}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16b8/ca4e/4bd98e749abc1b7bc9c7680410edfb5a"
          }}
          style={styles.ImageBackground_0_3320}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b050/6545/0ea3c743a5f80838060ab8092438d913"
          }}
          style={styles.ImageBackground_0_3321}
        />
      </View>
      <View style={styles.View_0_3303}>
        <View style={styles.View_0_3302} />
        <View style={styles.View_0_3304}>
          <Text style={styles.Text_0_3304}>maxjacobson liked 3 posts. 3h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dffa/0039/fc34f337afecfd5c4e1a4852e078cace"
          }}
          style={styles.ImageBackground_0_3305}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eab/734a/a4900aaf38de398587dc2d425a1ef7cc"
          }}
          style={styles.ImageBackground_0_3306}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a22/8b0f/2fd27339ca2b7afdfb034297a36ffb78"
          }}
          style={styles.ImageBackground_0_3307}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e73/1a88/46fb2d97560b7b80a014cc0f7782543f"
          }}
          style={styles.ImageBackground_0_3308}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c95/2693/edd8d37c7c247cab6212b9178a0db322"
          }}
          style={styles.ImageBackground_0_3309}
        />
      </View>
      <View style={styles.View_0_3353}>
        <View style={styles.View_0_3354} />
        <View style={styles.View_0_3355}>
          <View style={styles.View_0_3356} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84d/46cb/bb076f6922b392b4daf9d61854400790"
            }}
            style={styles.ImageBackground_0_3357}
          />
        </View>
        <View style={styles.View_0_3358}>
          <View style={styles.View_0_3359} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6a8/d26d/e94c1f0a1fdb8c036b4804947f9c98a5"
            }}
            style={styles.ImageBackground_0_3360}
          />
        </View>
        <View style={styles.View_0_3362}>
          <View style={styles.View_0_3363} />
          <View style={styles.View_0_3364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c385/39cc/7d83fa914c4f2ff8a33ddbd086e0949c"
              }}
              style={styles.ImageBackground_0_3366}
            />
          </View>
        </View>
        <View style={styles.View_0_3369}>
          <View style={styles.View_0_3370} />
          <View style={styles.View_0_3371}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bf/cecc/baa43c127520302902563d18971d5622"
              }}
              style={styles.ImageBackground_0_3373}
            />
          </View>
        </View>
        <View style={styles.View_0_3375}>
          <View style={styles.View_0_3376} />
          <View style={styles.View_0_3377}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eec0/d6be/b193cb051e10fc4daf3b1f3277b051d7"
              }}
              style={styles.ImageBackground_0_3379}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_3322}>
        <View style={styles.View_0_3323} />
        <View style={styles.View_0_3324}>
          <Text style={styles.Text_0_3324}>
            karennne liked martini_rond’s comment: @martini_rond Nice! 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2dc/ef2f/f17fa226a200109154a7978ad79f2852"
          }}
          style={styles.ImageBackground_0_3325}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eab/734a/a4900aaf38de398587dc2d425a1ef7cc"
          }}
          style={styles.ImageBackground_0_3326}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe9d/6511/f4a9106ba393ea635bc20899be142dd0"
          }}
          style={styles.ImageBackground_0_3327}
        />
      </View>
      <View style={styles.View_0_3328}>
        <View style={styles.View_0_3329} />
        <View style={styles.View_0_3330}>
          <Text style={styles.Text_0_3330}>
            kiero_d, zackjohn and craig_love liked joshua_l photo. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ae/a337/399a9a0f58ce51eec2ca48e68c480f4c"
          }}
          style={styles.ImageBackground_0_3331}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbfe/d392/7c584a1a235f17d12b070fb3e612a182"
          }}
          style={styles.ImageBackground_0_3332}
        />
      </View>
      <View style={styles.View_0_3335}>
        <View style={styles.View_0_3336} />
        <View style={styles.View_0_3337}>
          <Text style={styles.Text_0_3337}>
            maxjacobson and zackjohn liked mis_potter’s post. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be09/6ca2/e4e13071622e575c30f71678b1cbb498"
          }}
          style={styles.ImageBackground_0_3338}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbfe/d392/7c584a1a235f17d12b070fb3e612a182"
          }}
          style={styles.ImageBackground_0_3339}
        />
      </View>
      <View style={styles.View_0_3342}>
        <View style={styles.View_0_3343} />
        <View style={styles.View_0_3344}>
          <Text style={styles.Text_0_3344}>
            maxjacobson and craig_love liked martini_rond’s post. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7e0/4d80/9db3a41172a61b16402aecc5f294fcda"
          }}
          style={styles.ImageBackground_0_3345}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbfe/d392/7c584a1a235f17d12b070fb3e612a182"
          }}
          style={styles.ImageBackground_0_3346}
        />
      </View>
      <View style={styles.View_0_3349}>
        <View style={styles.View_0_3350} />
        <View style={styles.View_0_3351}>
          <Text style={styles.Text_0_3351}>
            kiero_d started following craig_love. 3h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ac/3835/013839b89fa505e9382b18108f5ca2d9"
          }}
          style={styles.ImageBackground_0_3352}
        />
      </View>
      <View style={styles.View_0_3381}>
        <View style={styles.View_0_3382} />
        <View style={styles.View_0_3383}>
          <View style={styles.View_0_3384}>
            <View style={styles.View_0_3385} />
            <View style={styles.View_0_3386}>
              <Text style={styles.Text_0_3386}>Following</Text>
            </View>
          </View>
          <View style={styles.View_0_3387}>
            <View style={styles.View_0_3388} />
            <View style={styles.View_0_3389}>
              <Text style={styles.Text_0_3389}>You</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa03/3f6f/6b480316b28c0ebbabb2e2763c5fa221"
              }}
              style={styles.ImageBackground_0_3390}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_3391}>
        <View style={styles.View_0_3392} />
        <View style={styles.View_0_3393}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_0_3395}
          />
          <View style={styles.View_0_3398}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_0_3397}
            />
            <View style={styles.View_0_3399} />
          </View>
          <View style={styles.View_0_3400} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed7/5ed8/6d52dd9ca7839e477e35f725cd76ef91"
          }}
          style={styles.ImageBackground_0_3402}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8993/e879/54bd9237f2d3127b556731ccdf8548cf"
          }}
          style={styles.ImageBackground_0_3406}
        />
        <View style={styles.View_0_3410}>
          <View style={styles.View_0_3411}>
            <Text style={styles.Text_0_3411}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_3412}>
        <View style={styles.View_0_3413} />
        <View style={styles.View_0_3414} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_3296: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%")
  },
  View_0_3295: {
    width: wp("100%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3297: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.7322404371584703%")
  },
  Text_0_3297: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3298: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_3299: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3300: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3301: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    resizeMode: "cover"
  },
  View_0_3311: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.71584699453552%")
  },
  View_0_3310: {
    width: wp("100%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3312: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.732240437158474%")
  },
  Text_0_3312: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3313: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_3314: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3315: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3316: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3317: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3318: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3319: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3320: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3321: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    resizeMode: "cover"
  },
  View_0_3303: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.1639344262295%")
  },
  View_0_3302: {
    width: wp("100%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3304: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.732240437158481%")
  },
  Text_0_3304: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3305: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_3306: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_0_3307: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3308: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3309: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    resizeMode: "cover"
  },
  View_0_3353: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.13661202185793%")
  },
  View_0_3354: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_0_3355: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_0_3356: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_3357: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333323%"),
    top: hp("1.5027322404371546%")
  },
  View_0_3358: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  View_0_3359: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_0_3360: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    top: hp("1.639344262295083%")
  },
  View_0_3362: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_0_3363: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_3364: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.733333333333334%"),
    top: hp("1.4002732240437012%")
  },
  ImageBackground_0_3366: {
    width: wp("6.266666666666667%"),
    minWidth: wp("6.266666666666667%"),
    height: hp("3.210382513661202%"),
    minHeight: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3369: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_0_3370: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_3371: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.733333333333331%"),
    top: hp("1.4002732240437012%")
  },
  ImageBackground_0_3373: {
    width: wp("6.230389404296875%"),
    minWidth: wp("6.230389404296875%"),
    height: hp("3.1917978505619233%"),
    minHeight: hp("3.1917978505619233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3375: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3376: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_3377: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("1.4506355660860635%")
  },
  ImageBackground_0_3379: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.194169789715543%"),
    minHeight: hp("3.194169789715543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3322: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3323: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3324: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_0_3324: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3325: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_0_3326: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_0_3327: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  View_0_3328: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3329: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3330: {
    width: wp("61.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688465%")
  },
  Text_0_3330: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3331: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3332: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_3335: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3336: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3337: {
    width: wp("62.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_0_3337: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3338: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3339: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_3342: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.77049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3343: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3344: {
    width: wp("62.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_0_3344: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3345: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    resizeMode: "cover"
  },
  ImageBackground_0_3346: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_3349: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3350: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_3351: {
    width: wp("49.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.0491803278688465%")
  },
  Text_0_3351: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07000000029802322,
    textTransform: "none"
  },
  ImageBackground_0_3352: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_0_3381: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3382: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_0_3383: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("6.0109289617486334%")
  },
  View_0_3384: {
    width: wp("48%"),
    minWidth: wp("48%"),
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
  View_0_3385: {
    width: wp("48%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 240, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_3386: {
    width: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666666%"),
    top: hp("1.502732240437159%")
  },
  Text_0_3386: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_0_3387: {
    width: wp("96%"),
    minWidth: wp("96%"),
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
  View_0_3388: {
    width: wp("48%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    backgroundColor: "rgba(255, 255, 240, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_3389: {
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    top: hp("1.502732240437159%")
  },
  Text_0_3389: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  ImageBackground_0_3390: {
    width: wp("48%"),
    height: hp("0.1366120218579235%"),
    top: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3391: {
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
  View_0_3392: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_3393: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("2.459016393442623%")
  },
  ImageBackground_0_3395: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3398: {
    width: wp("0.4%"),
    minWidth: wp("0.4%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_0_3397: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6666666666666714%"),
    top: hp("-0.008604956454917989%")
  },
  View_0_3399: {
    width: wp("0.6666666666666667%"),
    minWidth: wp("0.6666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6666666666666714%"),
    top: hp("-0.008604956454917989%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_3400: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  ImageBackground_0_3402: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18502604166666%")
  },
  ImageBackground_0_3406: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31113281249999%")
  },
  View_0_3410: {
    width: wp("14.399999999999999%"),
    height: hp("2.459016393442623%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3411: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_3411: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_3412: {
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
  View_0_3413: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_0_3414: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
