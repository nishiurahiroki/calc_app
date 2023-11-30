"use server";

type State = {
  value: string;
};

function evaluateExpression(expression: string) {
  // 数学的な式を計算可能な形式に変換
  // 例: "0516+620+000" -> "516+620+0"
  const result = expression.replace(/\b0+(\d+)\b/g, "$1");
  try {
    return eval(result).toString();
  } catch (error) {
    return "Error";
  }
}

export async function calcAction(state: State, formData: FormData) {
  const action = formData.get("action") as string;
  switch (action) {
    case "calc":
      if (!state.value) return { value: "" };
      return {
        value: eval(evaluateExpression(state.value)).toString(),
      };

    case "clear":
      return {
        value: "",
      };

    default:
      const isOperator = isNaN(Number(action));
      if (isOperator) {
        return {
          value: state.value ? state.value + action : "",
        };
      }
      return {
        value: state.value + Number(action),
      };
  }
}
