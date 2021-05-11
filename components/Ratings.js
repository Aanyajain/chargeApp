import React, { useState } from 'react';
import { View, TextInput, Alert, KeyboardAvoidingView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import {
    Button,
    Overlay,
    Text,
    Rating,
    AirbnbRating,
} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PlayStore } from 'svg'

export default function RatingScreen() {
    const [visible, setVisible] = useState(false);
    const [visble, setVisble] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleplay = () => {
        setVisble(!visble);
    };

    const ratingCompleted = () => {
        console.log('rating');

    };

    const close = () => {
        setVisble(!visble);
        setVisible(!visible);
    }

    const close1 = () => {

        setVisible(!visible);
    }

    // const Show = () => {
    //     setTimeout(function () {
    //         //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    //         Alert.alert("Alert Shows After 5 Seconds of Delay.");


    //     }, 5000);

    // }

    const Open = () => {
        Linking.openURL("market://details?id=com.whatsapp");
    }

    const ShowPlay = () => {
        // Show();
        <View style={{ height: 100, width: 100, backgroundColor: "red" }}>
            <TouchableOpacity
                onPress={Open} activeOpacity={0.6} >
                <PlayStore
                />
            </TouchableOpacity>
        </View>
    }

    return (
        <View>

            <Button title="Open Overlay" onPress={toggleOverlay} />

            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                // fullScreen={false}
                overlayStyle={{
                    top: 200,
                    flex: 0.5,
                    borderTopLeftRadius: 35,
                    borderTopRightRadius: 35,
                    backgroundColor: '#F6F6F6',
                }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width: 365, flex: 1, marginBottom: 50 }}>
                    <Text style={{
                        fontSize: 30, marginLeft: 20, top: 20, padding: 10,
                        fontFamily: "SF-Pro-Display-Medium"
                    }}>
                        Rate your veCharge experience
          </Text>

                    <Rating
                        type="custom"
                        minValue={1}
                        defaultValue={2}
                        fractions={10}
                        onFinishRating={ratingCompleted}
                        style={{
                            top: 10,

                            // backgroundColor: 'yellow',
                            padding: 10,
                        }}
                        ratingColor="#3498db"
                        tintColor="#F6F6F6"
                        ratingBackgroundColor="#D3D3D3"
                    />

                    <KeyboardAvoidingView style={{ justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                paddingLeft: 15,
                                textAlignVertical: 'top',
                                marginTop: 10,
                                width: "92%",

                                borderWidth: 1, borderColor: "#525252",
                                flexWrap: "wrap", borderRadius: 20
                            }}
                            numberOfLines={6}
                            placeholder="Describe your experience(optional)"
                        />

                    </KeyboardAvoidingView>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ marginTop: 50, marginLeft: 60, borderColor: "blue", borderWidth: 1, height: 30, width: 100 }}
                            onPress={toggleplay}
                        >
                            <Text >Submit</Text>

                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </Overlay>
            <Overlay
                isVisible={visble}
                onBackdropPress={close}
                // fullScreen={false}
                overlayStyle={{
                    top: 200,
                    flex: 0.5,
                    borderTopLeftRadius: 35,
                    borderTopRightRadius: 35,
                    backgroundColor: '#F6F6F6',
                }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: 365, flex: 1,
                        marginBottom: 50,
                    }}>
                    <Text style={{
                        fontSize: 30, marginLeft: 20, top: 20, padding: 10,
                        fontFamily: "SF-Pro-Display-Medium"
                    }}>
                        Rate us on Google PlayStore
          </Text>
                    <TouchableOpacity onPress={Open}
                        style={{ marginTop: "20%" }}
                    >
                        <PlayStore

                        />
                    </TouchableOpacity>
                </ScrollView>
            </Overlay>
        </View >
    );
}