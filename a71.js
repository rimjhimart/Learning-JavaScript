 let url = "https://breakingbadapi.com/documentation"
let response= fetch(url)
response.then((v)=>{
    return v.json()
}).then((ducks)=>{
    console.log(ducks)
    ihtml = ""
    for(item in ducks){
        console.log(ducks[item])
        ihtml +=`
        <div class="card" style="width: 22rem;">
            <img src="https://imgs.search.brave.com/F8phs68_860LeApzpnFxi-EJkw7HhMmc1TXYngDOLs0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzMz/ZGZjN2MzLTIwNDct/NDNkMy1hOGNhLWUy/YzBmMDg5NDk1Ni9k/ZDR1dm84LTU3NDQ3/YjljLTY0MzgtNGNm/OS1hYjRjLTE1NGI4/ZjkxNjVmMS5qcGcv/djEvZml0L3dfNDE0/LGhfMjQ4LHFfNzAs/c3RycC9kYWZmeV9k/dWNrX19ieV9yYWZh/ZWxfYXJ0c19kZDR1/dm84LTQxNHcuanBn/P3Rva2VuPWV5SjBl/WEFpT2lKS1YxUWlM/Q0poYkdjaU9pSklV/ekkxTmlKOS5leUp6/ZFdJaU9pSjFjbTQ2/WVhCd09qZGxNR1F4/T0RnNU9ESXlOalF6/TnpOaE5XWXdaRFF4/TldWaE1HUXlObVV3/SWl3aWFYTnpJam9p/ZFhKdU9tRndjRG8z/WlRCa01UZzRPVGd5/TWpZME16Y3pZVFZt/TUdRME1UVmxZVEJr/TWpabE1DSXNJbTlp/YWlJNlcxdDdJbWhs/YVdkb2RDSTZJanc5/TVRNMU1DSXNJbkJo/ZEdnaU9pSmNMMlpj/THpNelpHWmpOMk16/TFRJd05EY3RORE5r/TXkxaE9HTmhMV1V5/WXpCbU1EZzVORGsx/Tmx3dlpHUTBkWFp2/T0MwMU56UTBOMkk1/WXkwMk5ETTRMVFJq/WmprdFlXSTBZeTB4/TlRSaU9HWTVNVFkx/WmpFdWFuQm5JaXdp/ZDJsa2RHZ2lPaUk4/UFRJeU5UQWlmVjFk/TENKaGRXUWlPbHNp/ZFhKdU9uTmxjblpw/WTJVNmFXMWhaMlV1/YjNCbGNtRjBhVzl1/Y3lKZGZRLkw2ajBH/clJQV0NOVkNIZEZq/a24wc1d3YXJic3Rx/VVVCaEpiVVhsei1Q/SFk" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">ducks[item].name</h5>
              <p class="card-text"><a href="${ducks[item].url}">visit here</p>
              <p>Starts at: ${ducks[item].start_time}
              <p>Starts at: ${ducks[item].end_time}
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        `
       
    }
    cardContainer.innerHTML = ihtml
})
