interface IAnyObj {
  [key: string]: any;
}

const getData = async (data: string) => {
  const isURL = data.includes("https:");

  if (isURL) {
    const res = await fetch(data);
    return res.json();
  }

  return data;
};

const completeDataFetch = async (dataToComplete: IAnyObj) => {
  const dataCompleted: IAnyObj = {};

  for (const key in dataToComplete) {
    if (Object.prototype.hasOwnProperty.call(dataToComplete, key)) {
      const data = dataToComplete[key];

      if (Array.isArray(data)) {
        const subDataCompleted = [];

        for (let index = 0; index < data.length; index++) {
          subDataCompleted.push(await getData(data[index]));
        }

        dataCompleted[key] = subDataCompleted;
      } else {
        dataCompleted[key] = await getData(data);
      }
    }
  }

  return dataCompleted;
};

export default completeDataFetch;
