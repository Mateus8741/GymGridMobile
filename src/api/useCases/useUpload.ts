import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { supabase } from 'src/lib/supabase'

type UploadProps = {
  profileId: string
}

export async function uploadProfilePicture({ profileId }: UploadProps) {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

  if (status !== 'granted') {
    alert('Precisamos de permissão para acessar sua galeria de fotos')
    return
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  })

  if (!result.canceled) {
    const img = result.assets[0]
    const base64 = await FileSystem.readAsStringAsync(img.uri, {
      encoding: 'base64',
    })
    const filePath = `${profileId}/avatar.png`
    const contentType = 'image/png'

    const resultUP = await supabase.storage
      .from('avatar')
      .upload(filePath, decodeURI(base64), {
        cacheControl: '3600',
        contentType,
        upsert: true,
      })

    console.log(resultUP)
  }
}
