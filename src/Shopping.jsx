import { Component } from "react";
import { MyCard } from "./MyCard";
import { Shop } from "./Shop";

export class Shopping extends Component{

    categories = [
        { proName:"IPhone" , imgSrc:"https://images.pexels.com/photos/818043/pexels-photo-818043.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { proName:"Samsaung" , imgSrc:"https://images.pexels.com/photos/11772523/pexels-photo-11772523.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Oppo" , imgSrc:"data:image/jpeg;base64,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" },
        { proName:"Vivo" , imgSrc:"https://www.91-cdn.com/hub/wp-content/uploads/2022/05/Vivo-X80-2.jpg?tr=q-100" },
        { proName:"Apple" , imgSrc:"https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Lenovo" , imgSrc:"data:image/jpeg;base64,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" },
        { proName:"Dell" , imgSrc:"https://images.pexels.com/photos/9474023/pexels-photo-9474023.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Acer" , imgSrc:"https://images.pexels.com/photos/6452/laptop-notebook-technology-white-6452.jpg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"BMW" , imgSrc:"https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Lamborghini" , imgSrc:"https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Ferrari" , imgSrc:"https://images.pexels.com/photos/3954426/pexels-photo-3954426.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Mercedes" , imgSrc:"https://images.pexels.com/photos/1637857/pexels-photo-1637857.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Refrigerator" , imgSrc:"data:image/jpeg;base64,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" },
        { proName:"Microwave" , imgSrc:"https://images.pexels.com/photos/6588598/pexels-photo-6588598.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { proName:"Washing machine" , imgSrc:"https://media.istockphoto.com/photos/washing-machine-at-blue-wall-frontal-view-with-copy-space3d-rendering-picture-id1096523200?b=1&k=20&m=1096523200&s=612x612&w=0&h=L1oPQRg9M6qu8lSesEsM0k5S3TCP-XFNV1eFyj6VOHs=" },
        { proName:"Electric Oven" , imgSrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGBgaGBgZGBoaGRkaGRgcGBgZGhgYGhocJDAlHB4rIRgZJjgmKzAxNTY1GiQ7Qzs0Py40NTEBDAwMDw8PHhAQHj8hHyQ/Pz83Pz8/MT8/Pz83NzVAODo/NjgxPjQxPz88MUA9ND0/ND82NDZANDY0QDFAPzQ0Mf/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABLEAACAQICBAoGBggFAQkAAAABAgADEQQhBRIxQQYiMlFhcXKBkbEHE0KhssEUI1JzgtEVNFNikrPC8CQzQ6Lx0hYlRGODk8Ph4v/EABcBAQEBAQAAAAAAAAAAAAAAAAACBAH/xAAcEQEBAAMAAwEAAAAAAAAAAAAAAQIDERJBUQT/2gAMAwEAAhEDEQA/ANmhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCQvCjTP0WgagAZiwVAdhY3OdtwAJ7oE1CZz9N0tiKdOrTK0wy62rTRCLEnVJZ3JzWxtbK8RbFaZX2tbrpKfgBgaZEGxKDa6jvEy86W0ovLoo/bpYg+YtFRwzxqcrD0R1a6eZEDSvpS7gx6kbztaeevbdTbvKged/dM5X0iVt+GQ9mqg8zHKekR9+EfuqIfIQL7rVD7KD8Rb3ao855q1N7qOpD82MpK+kVd+GrDqXW8hFE9I9HfRrjrpn84Fy9S37R+4J/wBM59S/7Vu9U+SyqD0i4b2tde0hEVpekDBt/rL3h/ygWf1dT9oO9PyInurV+2n8Df8AXIKnwywrbKyeJHnF14T4Y7K1P/3E+ZgSt6v7h/iH5w9ZV+yh/Gw/ojFNNUm2Oh6nU+Ri640HZAW9dU3ovdU/NRPfpDfsz3MvzIiH0qH0oQFxiz+zf/Z8mnv0wb1cfhv5RD6TD6RAX+mr+8PwP+UBjU5/EMPMRv6+HroDoYxPtr3m3nOhiUOxl8RGXrZ4XHMPCBICoOceInciSF+yPATyy8wgTEJCl1H/ACZy+MA3kfiP5wJyErb6YA9s+8zxNIVm5CO3TmBAssJBJTxbb1QdJufnJHBB1Gq7h225CxA6bbYDyEIQCUj0nn6imP8AzD8DS7yk+k4fUUvvf6GgTnBWmVw1MH7K26tVfneTU+f9H8McZTBRauSsVW6qSANgvbPvkpS9I2OG1qbdpD/SwgbWROCg5h4CZFS9KGKHKp0W6g6/1GOk9KlTfhkP/qEf0wL9jaCnao8JX8XgKZ2oh/CJBN6Sg3KoEdTA+doi3Dqk22m4/hPzgPquAp35Cfwr+UKWjKbHk+GXlIz/ALVUDvYfhPyEc4bhNhr5uR+FvmIE/huDNBvtjqdvzjv/ALF0G9px+InzMa4Thbgxa9ZR1kCTeG4U4NtmJp/xiBFvwBoH2mPWqHzBjap6P6I2Ff4KY8klqp6Zw7bKqHvE6fH0z7a+IgUbEcC0Xcv99QEgNI6Ow9A2ZLn90uP65o+LrIdjA94mZcMq3HNsxAQTS+GXYtdezUYf1xzT09Q/bYtegVT8wZUWqwR4F8TT9PVYricXxUZyOIxsilm5S22A7THGjNJYjEazUcS3qwKZXXpUy510Dm9hla9t+yUvRiktUt+wxHh6l5afRuv+HY/u0f5S/nAsdGnjzsrUm7SavkI4WjpHcMM3e4PynWPqsicUE9Atc5E2F8szYdFyd0qVDSePXEBirtSZtUUvVLZRcji1F49xblEkG99mwLf/AI8bcPTbsuB5tGuktNYjDpr1sLqJcDW9alrk2AtmT1SyaKxbMraxvquVDZcYC3NtIJK336sqnpmb/u8W/b0/cSflAbtw5pggeqZiwuPVtrt/CQD5Sf0fVqYhFqU1ARxcFjYjOxBXaCCCCNxBmSaKrsj02Q6rercXHNdJpXATEt9DW7HOriT44mqT74E4NDOeXVA6FHzMWp6FojlFnPSfynvrrZk264n+kE2Alj+6C3lAfUqVNOSijuF/GdtiDI76S55KW6XYD3C5g6VCOM4XoRfm1/KA7qVTbbEdGVNZ2N78U+YjQ4dSCSGe3PrMPDkiKaCA13sLXUG1rW2bt2yBPQhCASlek79Xp/e//G8uspPpQ/V6f3v9DwMVQ5v22+UcYdNZrRqpzftt8o7wLcfu+YgPDo6cHR555Jm+6eavOYEWcCeec/Qm3Z90lgoiiOIEMNHPzTx9HuL3XZLRhRc7Ldcc4lBdz+63wmBT/wBG1bA6hsdmycNgag2o3hfymnYRU1E4vsL5CLGkh3QMmbDPvRv4TOQCu4jxE1dsIh3RNtHUzugZgMU42O4/E35zr6fU/aOetifOaM2h6R3CIPoCkfZXwgZ+ca+9r9YB+UBijvCn8IHlaXZ+DVI+yPCV/hHolKIUrluIvAjjpAlSuogDAqbBlYqRYjWBvYg2kvwW4QtSWoiU0C66gAFuKEpooFySTz3O8mVm8kuD2rrNrcn1vG6tWnfZnsgXdOFhPKpj+L/8x8nC1CLNTPVrXHhslS1AxbVNvsrmdbqJ8oYZVdtVHRnF+IroXy/c1ta/RbKBfMNwvo5XRwOgLb3GRPpA0rSxWEFNC2sKisbrbIKw8yJXQmRN1yNrXFz1DaR1TnFvZD3D3wIvDZVEXmpv8STROBC3wKDWKj1mJuRl/wCJq75nCN9ev3b/ABJNH4AuRg0tmfWYjn34ipzZwJs06albi9zYE3a5tfInLYDHtI81gO/5C3iRG9eq+V1bM2zGY353OsBlv6J7TVTmzEdAt55+UD0VGuda202tzbr57eozmvWQkA2uDlmdtjuJJO/K8TGROesLki4GzcNmfhO8RUawuhC34vFIF7bRuGW8QOrMRkR0XIv7rkeAiug/8x77dUXzvv598alAVze3MLXz6bnyBjnQR+sffxB5wJ+EIQCUr0n/AKtT+9HwPLrKT6Uv1ZPvR/LqQMQvxn7ZjrANxx/e8Rkx4z9o/KO9GZuM7ZfMQLDrdE8uefwznQTO1rnxivqbAlrDmF8/AQG9v7JiiH+xlO3orkRrDiM1jY5gnoG4RMalgQ+ZtcFWFufMXgPsK2cc4ipcv2W+ExrhEXWA9Yh25lio6uMI9fCOS2qUa6sMqlMnNSBleBM4U8ROyvkIveRi4lkAQoQ31aK2RW7WBvY5Zm3fHCNrjWu1s9q22HqgO7zy8RLjbcd1h5T3Wgdlothkvc21gMrA2vz+Az8I1LyTwtNLKxYiy7FKXBObEhjnf8uaBHVBY28Dzg5g94lR4ZtkOsS+6So0wFszgktmwUi232Dzk+MoPDemQBmCLjMH5HOBULyR0EGJZVBJNQ2A2k6lORWtJbgzWCPrnYtYMeoLTJPugaLojgxTItVLOWFmUNZM9osM2G7PbzSp+kjg2uF1GQfVVDxTldWGZQ9NswRzHmmgaFQpkXZ7m4LatwLDK6gXG/vkV6YsQg0cFYjWasmpz3AYsR+G/jAyJsYzpr6zGohVS+RZla+oST+8NUnpXna88Mdr0EfnZL+8ESoYRms5AvrKqWttJZXtbfyPfLc9Mrh6alVUh1uEFhc3Jy74Ap+uXsP8STSOARP0Onq7devzft6nPlM0B+tXsP8AEk0ngIpOEpAGx1q2ZNv9apvgWLEI4AJtYnMBhlltsMvDnhSZLcYEnmBy91j74niaRWx11Y34wzva24nPbzidUK6qOQGPOc/O490DhOVxL5tcca5B5gd0VxCuACbEE52YeJtkfG8QZsyQALm+WWZzJnjMTtN4CoZNXMEnry7rW8444Pf5j9kecj3MfcHP8x+yPOBY4QhAJSPSp+rU/vh/LeXeUj0pn/DU/vh/LeBhbnjP2jHWjX446vmIyrnjv2jHGjM3AuB0m9t220C0estne0TepFkwLnktTbsvTJ8C1/dPKmCqKLtTcDnKtbytAbhju935ztU5/wA4mz2NjkeY/lOlaA8wwztb5/33x1XXlAblbZmBxT9nIeJjPDvmN/dfzyEeYmsGZ9/FP72xDzWUQHmCRACxZ9a6sljxVKkNdsrHMDLqnaYZwAKTlhuVXIbPfY5RNBrAEZ5dq3ebIpnSi+YN+kG/+88UdQgdjE4hdruLfa2Dou+Z7hOv0jWG3UI/eRM+oBdY+6efSXty2I7R1e922904vlfdz8kd7HNu6A5XSjjbSpk8wRgT/Cwt1mPV4RMTd8OrHoc3594IBkQfdu9kHqHKaL4aqiHj0w43AsydwVfnAkK2m8O4OvQdOdkZCRnmbsglM4Z4ikyj1ZqbcxUCeanPwltfG0AQy4YKc7h2NQbraqts8JUuHGOLgDVVQCMlCj3KIFQ1pJ6E2P2z8CSH1pLaDbiv2z8CQLPo/T9aiNVSrKNgcE26AQQbdEjdPl8aytiKrcQEKqKoVbnPVBub5C5JJNoqmKpoh12AGZ5Q1jsyVfaOX/AzkaOEeH1tV0qKPtcRu8oDl3EwHeDwiUwFVbAbzmSTtJ6YviBrKejPwnn6QoCyls3GsjWOqwuQNVr23ZggEXtOK1SwI5xaBHk/Wr2H+JJpHAz9Tp9dT+a8zVj9avYf4kmk8Dj/AIOl+P8AmPAnJ7ecXheB3eeFpzeBMAYyR4Nn6x+yPORTGSfBo/WP2R5iBZYQhAJR/Sr+rU/vh/LeXiUf0q/q1P74fy3gYLiW479oxfRzccRtizx37RimjTxxAtRMFqFc1JU/ukjynF4i7iA8GlKw/wBRj2jr/FeH6RNs0psN90VfgtI1qs5uTAlBpJN9Jfws49za14t+kaLE3RxcEWDKwFxbIWGyQwHNmeid2Oy0Cx09J07AF8xa2vTJAA6AxF+6KHHKbfWU26W1xbqBXVEr4w1WwOo3RbPynBZxtB71/OBZhiGJuCjW9r1lNm/CC3F8Iorvt9W/WoLn+IXy6pVBW6B4W8p6tXot1EwLQ2JK7UKX5wQx72nAxi/8HPvJkHT0i68l3Xqcjyiw0u+92bthX+K8CYGKX/j5naZWuFlUFRbnGwZR+ulDvFMjppoPeoEhOEeKDgWRFz9kv/UTAg7ye4KUBUbUJtrVCL83FTPPm290rmtJ3gzW1G17X1alyPtDVS69RFx3wNawODooNVaaau+6q2t2iRxu+Z16T+CyYdkr0V1adQlWQbEcC/F5lYXNt2qd1gL9oz1YUGkFCMdYaoAFztyGwyu+lzSifRqOHuC5qesI3qqqygnmuW9xgZlhn1qT0yTdSrp0EsEdR0nWX+HpllqBxRplwQx1b367HvkDo/RTtTZgLB7KCfsghma2/MLbvljxKfVqt7hSvNnzk22kwGjH61ew/wASTS+B5/wdL8fxvMxY/WL2G81ml8ET/hKX4/jeBOXhrTi881oHZaeFpyoJIAzJyAjjE4F0UFtUXNtXWGt12gNmaSnBc/WVOyPMRph8SirYUg755m5FuzHXBY/WVOyPOBaIQhAJR/Sr+rU/vx/LqS8Si+lc/wCGpffj+XUgYDjj9Y/aMU0a/HEQ0gfrH7UToVijBhAt5LGIup5pC/pboMUXSo5yPGBIv1T1ATGI0mPteP8A9xRNIdI90CWop/YjhxtAFsrfKRFLSFuaLrpHogWqnewHQPKe5yFTT5G0X7hFk0+u9R74D96CnaoPcI2fAofZHdlOV0wh2i3f+Yiq6Rpnefd+cBq+jl3XERbR/M3iJInEofa9xnmuvOIEa2DbnEg9OUmUC/PLdaVnhULAdYgV3Wk9wcTWBG8vYd6oJXLye4PNxG7Z+FYFk+kPRGqrcoBgylgcx1j3iNFpaxaoyK5uNZ3AdrnZm1zJjDaJr1k1lpqWtxHqOVBzPsi5Iz5gDznO9W0xi8bhKupVFieNqulMo4zsylRYjM5g32jbeBNCspQhhn7NlUC3Sdv92iLC6nqkaNLqymtyQMmphb6rWOQYHIG2Vxz80d1K41NYHI2t3wGFU/WL2G81ml8EAThKQAuePs7bzMah+sXsN5rNR4DM/wBGo6l9fj2t23v7oE3XwlRFDMhCk23ZdJG0CKYOpRUEurM18gDZbdM70jhqqqGqOCSeSXu1ucDZ4RLA4tVGVMO5PFJubdGrATZgz3RQt2GQOQOW/dF8bh1UXNUO98wLsOm7RvXdmqHX4hJAbi2t02iuMWiF1ULs1+Ucl6rQFsC1Ypq01sM7sABfoLHIxfgv/mVL7dUX8Y2w+HdqedQJTztdsid4sMzHHBXl1OyPOBaIQhAJRfSz+q0/v1/l1JepW+G+g2xeG1KZAdXDqCbBiAylSd2THvAgZdoTgdhcTQWq4qB2Z9ZlqWzV3UZEEDJRPcR6MaJ5FeovaVH8tWXTgtwbxFDDinUQBg7nJlIszlhY36Y3Gm8OSV9dTBBIIJ1cxkRnAoFf0ZVR/l4hG7SMnkWkbifR9jV2LTfsuBf+MLNZp10bkurdTA+U7a8DEcRwVxqZnDVD2AKnwEyMxODqJy6bp20ZfMTftaGueeB89B+n3zta7D2jN3xGCpPy6VN+2iN8QkZieC2CflYZB2dZPgIgY+MY/PO10i00vEcAsG3JFROy9/jBkfX9G9M8jEOvaRW8isCkrpPoii6SXeDLDX9HFUcivTbtKyeV5H1+AmMXYiP2XX+q0BomkV+1b3RZMeNz++M8RwYxicrDVD2V1/gvI+vhKictHTtKy+YgWRdINuaMNNYouBc3zkGG6Z6zk7ST1mB3eWDgzYizGwL5nost5W7yf4PtxD2z8KwNkwNdixBpsmqbAEqQRu1dUnLLfaMPSXgkrYBnIGvRKuh3gMyq69RB2c4EjtE8IU1QtQlWAA1rEhrc9s7xpw10y2IofR8OpcMy67khBZTrBRrEE3Ive26BmmAq2FRb2BVeoEOtm2HYC3cTJ2lTK4dF1lbNbFb2sWuNoBnWA0AFVvWMutkWUH2Rfig79xNjzW2R1iEGpYCwFrAdECNqHjr2G81mo8BkdsNRCGzEvY3t7b75llQ8dew3ms0/gPT18LRXWC3NTjNsFqjwLHj8IFFzVVnvmou2W/jc/XOtGYiqAUpJck5tq3I6LnIDrnGNpUVWyOzvfMgAJbeM/lPMG1UqVQsEvdjfVUdbbvGBziFYVCKtyQRrZgkjLYeqLV66uNSnSAzvflObeU4FJF5TFzzJkve529w7501diNUWRfsrlfrO1u8wOfowXltY/ZWxbvOxf7yknweINR7Cw1AANu/aTvMjqWFZsgJPaI0caZLHaRa0CWhCEAhCEAmLaV4DYz1jstHWUu5Uq6HIsSMiQdnRNphA+ecZwKx7kLTwz3vmxK0wObjMRfumx8EOD4w2DpUKoD1ApaozcbjsbsATtAvqjoUSxwgMH0TRPsAdRI8jGtTg9SOwsO8HzEmYQK5U4NfZqeK/MH5RrU4O1RsKHvIPvEtsIFHqaFrj2CeoqfIxo+EdeUjDrUiaHCBm8JoVSgrcpVPWAfONauiKDbaa9118oFGvOg5ltqcHKR2F16iD8QMZ1ODB9moO9PmG+UCrV8DSfl0qb9pEbzEjq/BXBNysMg7OunwMJcKnB2sNmo3U5B8CtvfGdTRdddtF7c41X9ysT7oFMxHADBNsFROzUFv9ytGuieBaA11Ws66lUqt1VstRGBaxFzxt1tkuVTi8oMnbR0+ICNdGW165UghqikEEEf5NIHZ0gwK7V4G1ByKyN2kZPItGz6AxaKVCK6kgnVdNovbl2O8y3aZwtWpRKUX1H1lYHWK3AvdQR3bcpWB+mKfss4H3dS/hdpGWXLzjXq/NNmPlMpL8RFbA105dGoOnULDxW4jdqgsw32OWw+EvuhMXWqU9ashRwxUgoyGwAN7HrPhIv0gXOHpneKwF99ijki/NcDwlS9nWfZruvK430oL8tey3ms07gKithKYZgovVzIJ/1XyAG+ZieWvZbzWaXwGQnB0+1V/nPOoWb1lNeSmuftPs7kGXiTOXqu/KJPMNgHUBkI5wmjXfYMvd4ybwuh1XNszzDZ47YEHh8ITnY5C5yvkJR9I+kugramGpmob29Y90QdKpym79WbPTQAWAAHRKzi+AGjahu2Epg3vdNan8BEBr6OtIVK6VnqNrEOqqLABQFuQAO0Jc40wOBp0UCUkVFG5RbPnPOekx3AIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAI2q4Km+bU0btKp8xHMIEc2h6J9i3UWHuBtEm0FT3Fh3g+YktCBlPC/TT4LEeqelroyK6OH1SQcmBFrXBB37LSr8IeENPE0Aio6OHVrMAQQFdTYg/vTVuGnBVcciAOEqU2JVyutxWFmUi4yJCm/7soOI9F2LXkPRf8AEynwK298CgYdAXu25TlvNyPAZTWfRZVFRXpimFpUVFrklneo7uxO4AZ8XPlCVjC+jjHNV1WREWwvUZ1K7TsCksT3DrmqcE+Dq4KiaasXZm13cgDWYgDIDYAFGVzvgToFp1CEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCED//Z" }
    ]


    render(){
        return(
            <div className="container">

                <div className="row g-3">
                    {this.categories.map((product) => {
                        return <Shop proInfo={product}></Shop>;
                    })
                    }
                </div>  

            </div>
        );
    }
}