import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from "react-native"

const Flames = () => {

    const [ result, setResult ] = useState(null)
    const [ yourName, setYourName ] = useState("")
    const [ partnerName, setPartnerName ] = useState("")
    const [ yourSplitName, setYourSplitName ] = useState([])
    const [ partnerSplitName, setPartnerSplitName ] = useState([])
    const [ flames, setFlames ] = useState([
        'Friend',
        'Lover',
        'Attraction',
        'Marriage',
        'Enemy',
        'Sister'
    ])
    const [yourRemainder, setYourRemainder] = useState(null)
    const [partnerRemainder, setPartnerRemainder] = useState(null)

    useEffect(() => {
        console.log(yourSplitName, partnerSplitName)
      }, [yourSplitName, partnerSplitName])

      useEffect(() => {
        console.log(yourRemainder, partnerRemainder)
        const totalwords = yourRemainder+partnerRemainder
        const count = totalwords.length
        console.log(count)
        if (count) {
          getResult(flames, count)
        }// eslint-disable-next-line
      }, [yourRemainder, partnerRemainder])

    const handleReset = () => {
        setResult(null)
        setYourName("")
        setPartnerName("")
    }

    useEffect(() => {
        console.log(yourName, partnerName)
        setSplit()
        // eslint-disable-next-line
      }, [yourName, partnerName])

      const setSplit = () => {
        setYourSplitName(yourName.split(""))
        setPartnerSplitName(partnerName.split(""))
      }
    
      const getRemainder = (name, splitName) => {
        console.log(splitName, name)
        // eslint-disable-next-line
        splitName.map(item => {
          const regex = new RegExp(`${item}`,"i")
          name = name.replace(regex, "")
        })
        return name
      }
    
      const handleRemainder = () => {
        const yRemainder = getRemainder(yourName, partnerSplitName)
        const pRemainder = getRemainder(partnerName, yourSplitName)
    
        setYourRemainder(yRemainder)
        setPartnerRemainder(pRemainder)
      }
    
      const getResult = (flames, count) => {
        for (let i = 6; i > 1; i--) {
          const removeIndex = (count - 1)%i
          flames.splice(removeIndex,1)
          console.log(flames)
          console.log(removeIndex,flames.length-1)
    
          if (removeIndex < flames.lenght-1 || removeIndex !== 0) {
            const flamesPart = flames.splice(removeIndex,)
            console.log(flames, flamesPart)
            flames = [...flamesPart,...flames]
            console.log(flames)
          }
        }
        setResult(flames)
      }
    
      const flamesCalc = () => {
        setFlames([
          'Friend',
          'Lover',
          'Attraction',
          'Marriage',
          'Enemy',
          'Sister'
        ])
        handleRemainder()
      }
    

    // const splitNames = (yourName, partnerName) => {
    //     setYourSplitName(yourName.split(""))
    //     setPartnerSplitName(partnerName.split(""))
    //     console.log(yourSplitName,partnerSplitName)
    // }

    // const getRemainder = (splitName, name) => {
    //     console.log(splitName, name)
    
    //     splitName.map(item => {
    //         const regex = new RegExp(`${item}`,"i")
    //         name = name.replace(regex, "")
    //         console.log(name)
    //     })
    //     console.log(name)
    //     return name
    // }

    // const getCount = (yourRemainder, partnerRemainder) => {
    //     const totalWords = yourRemainder+partnerRemainder
    //     const totalCount = totalWords.length
    //     console.log(totalCount)
    //     return totalCount
    // }

    // const getResult = (flames,setCount) => {
    //     for (let i = 6; i > 1; i--) {
    //         setFlames(flames => flames.filter(item => item !== flames.splice((setCount-1)%i,1)))
    //         console.log(flames)
    //         console.log((setCount-1)%i, flames.length-1)
        
    //         if ((setCount-1)%i < flames.length-1 || (setCount-1)%i != 0) {
    //             flamesPart = flames.splice((setCount-1)%i,)
    //             console.log(flames)
    //             setFlames([...flamesPart,...flames])
    //             console.log(flames)
    //         }
    //     }
    // }

    // const flamesCalc = () => {
        
    //     if (yourName == "" || partnerName == "") {
    //         console.log("Enter both names")
    //         setResult("Enter both names!")
    //     } else {
    //         splitNames(yourName, partnerName)
    //         // console.log(splitArray)
    //         const yourRemainder = getRemainder(partnerSplitName, yourName)
    //         const partnerRemainder = getRemainder(yourSplitName, partnerName)
    //         const setCount = getCount(yourRemainder, partnerRemainder)
    //         getResult(flames,setCount)
    //         setResult(flames)
    //     }
    // }
    

    return (
        <View>
            <Text>FLAMES</Text>
            <View>
                <TextInput 
                value={yourName}
                placeholder="Yourname"
                onChangeText={text => setYourName(text)}
                />
                <TextInput 
                value={partnerName}
                placeholder="Partnername"
                onChangeText={text => setPartnerName(text)}
                />
            </View>
            <View>
                <Text>{result}</Text>
            </View>
            <View>
                <Button
                title="Reset"
                onPress={handleReset}
                />
                <Button 
                title="Submit"
                onPress={flamesCalc}
                />
            </View>
        </View>
    )
}

export default Flames
