// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync


getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
              })
            })
          })
        })
      })
    })
  })
}).catch((err) => console.log(err))

async function makeBroccoli() {
  const steps = [0, 1, 2, 3, 4, 5, 6]
  try {
    for (let i = 0; i < steps.length; i++) {
      document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", i)}</li>`;
      if (i === (steps.length - 1)) {
        document.querySelector("#broccoli").innerHTML += `<li>Broccoli's are ready</li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
      }
    }
  } catch (e) {
    console.log(e)
  }
}
makeBroccoli()

const step0 = obtainInstruction('brusselsSprouts', 0)

const step1 = obtainInstruction('brusselsSprouts', 1)

const step2 =
  obtainInstruction('brusselsSprouts', 2)


const step3 =
  obtainInstruction('brusselsSprouts', 3)


const step4 =
  obtainInstruction('brusselsSprouts', 4)


const step5 =
  obtainInstruction('brusselsSprouts', 5)


const step6 =
  obtainInstruction('brusselsSprouts', 6)


const step7 =
  obtainInstruction('brusselsSprouts', 7)


Promise.all([step0, step1, step2, step3, step4, step5, step6, step7]).then(results => {
  results.forEach((result, index) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${result}</li>`;
    if (index === (results.length - 1)) {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel sprouts are ready</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    }
  })
})
